import React from 'react';
import styles from './style.module.scss'; // Importe o arquivo de estilos SCSS
import TextBox from 'devextreme-react/text-box'; // Importe o componente TextBox

const Input = ({ icon, placeholder, ...rest }) => {
  return (
    <div className={styles.inputContainer}>
      {icon &&  <i class={`dx-icon ${icon} ${styles.icon}`}/>} {/* Renderize o ícone se ele estiver definido */}
      <TextBox className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
