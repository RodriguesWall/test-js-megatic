import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi'; // Importe o ícone do menu hamburguer
import { Link, useNavigate } from 'react-router-dom';
import TreeView from 'devextreme-react/tree-view';
import Footer from '../Footer';
import routes from "../../routes/allRouter";
import styles from './style.module.scss';

const Sidebar = () => {
  const navigate = useNavigate();


  const formatTreeViewData = (routes) => {
    return routes.map((route, index) => {
      return {
        id: index + 1,
        text: route.item,
        icon: route.icon,
        items: route.subItems.map((subItem, subIndex) => {
          return {
            id: `${index + 1}-${subIndex + 1}`,
            text: subItem.name.replace(/-/g, ' '),
            link: subItem.path,
          };
        }),
      };
    });
  };



  const treeViewData = formatTreeViewData(routes);
  const itemTemplate = (item) => {
    console.log(item);
    if (item?.items) {
        return (
          <div className={styles.menuItem}>
            <i class={"dx-icon "+item.icon}></i>
            <b>{item.text}</b>
          </div>
        );
    } else {
        return `${item.text}`;
    }
}
  return (
    <div className={`${styles.sidebar}`}>
      <TreeView
        className={styles.treeView}
        items={treeViewData}
        displayExpr="text"
        keyExpr="id"
        selectionMode='single'
        focusStateEnabled={false}
        expandEvent='click'
        width='100%'
        collapseIcon="chevrondown"
        expandIcon="chevronright"
        itemRender={itemTemplate}
        onItemClick={(e) => {
          const selectedItem = e.itemData;
          if (selectedItem.link) {
            navigate(selectedItem.link); 
          }
        }}
      />
      <Footer />
    </div>
  );
};

export default Sidebar;
