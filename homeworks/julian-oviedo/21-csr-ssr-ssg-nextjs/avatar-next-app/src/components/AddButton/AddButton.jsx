import React from 'react';
import style from './style.module.css';

function AddButton({ onClick }) {
  return (
    <button className={style['bttn-add']} onClick={onClick}>
      +
    </button>
  );
}

export default AddButton;
