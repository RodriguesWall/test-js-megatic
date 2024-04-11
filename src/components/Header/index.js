import React, { useState } from 'react';
import { Toolbar, Item } from 'devextreme-react/toolbar';
import styles from './style.module.scss'; 
import { BiMenu } from 'react-icons/bi'; 
import Input from '../Input';

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
            <Input 
              placeholder="Search..."
              icon="dx-icon-search"
            />
          </Item>
          <Item location="after">
            <i class={`dx-icon dx-icon-bell ${styles.icon}`}/>
          </Item>
          <Item location="after">
            <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg" 
              alt="User" className={styles.userIcon}/>
          </Item>
        </Toolbar>
      </div>
    </header>
  );
};

export default Header;
