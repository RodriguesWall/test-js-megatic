import React from 'react';
import styles from './style.module.scss'; // Importe o arquivo de estilos SCSS
import TextBox from 'devextreme-react/text-box'; // Importe o componente TextBox

const Container = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
