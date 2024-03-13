import React from 'react';
import styles from './style.module.css';

export default function AddNewPhoto({ onClick }) {
  return (
    <div>
      <button className={styles.addButton} onClick={onClick} />
    </div>
  );
}
