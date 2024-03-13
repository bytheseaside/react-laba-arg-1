import React from 'react';
import styles from './styles.module.css';

const AddButton = ({ onClick }) => {
  return (
    <div className={styles.addAvatarTile} onClick={onClick}>
      +
    </div>
  );
};

export default AddButton;
