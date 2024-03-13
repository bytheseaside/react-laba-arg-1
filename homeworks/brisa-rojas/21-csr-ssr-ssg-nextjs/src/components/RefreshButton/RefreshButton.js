import React from 'react';
import styles from './styles.module.css';


function RefreshAllButton({ onClick }) {
  return (
    <div className={styles.refreshAllButton} onClick={onClick}>
      REFRESH ALL
    </div>
  );
}

export default RefreshAllButton;
