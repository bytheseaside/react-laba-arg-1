import React from 'react';
import styles from './style.module.css';

export default function RefreshButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Refresh All
    </button>
  );
}
