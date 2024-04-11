import React, { useState } from 'react';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi'; // Importando os ícones
import { Toolbar, Item } from 'devextreme-react/toolbar'; // Importando Toolbar e Item
import { TextBox } from 'devextreme-react/text-box'; // Importando TextBox
import { Button } from 'devextreme-react/button'; // Importando Button
import styles from './style.module.scss'; // Importando o arquivo de estilo SCSS
import { BiMenu } from 'react-icons/bi'; // Importe o ícone do menu hamburguer

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.sidebarHeader}>
        <BiMenu className={styles.menuIcon} onClick={toggleMenu} />
        <h1 className={styles.siteTitle}>Your Site Title</h1>
        <Toolbar className={styles.toolbar}>
          <Item location="after">
            <BiSearch className={styles.icon} />
          </Item>
          <Item location="after">
            <BiBell className={styles.icon} />
          </Item>
          <Item location="after">
            <BiUser className={styles.icon} />
          </Item>
        </Toolbar>
      </div>
    </header>
  );
};

export default Header;
