import React from 'react';
import styles from './style.module.scss'; // Importe o arquivo de estilos SCSS

const Footer = () => {
  return (
      <footer className={styles.footer}>
        Copyright © {new Date().getFullYear()} <br /> Walace's Test Megatic.
      </footer>
  );
};

export default Footer;
