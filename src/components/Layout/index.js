import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './style.module.scss'; // Importe o arquivo de estilos SCSS

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
