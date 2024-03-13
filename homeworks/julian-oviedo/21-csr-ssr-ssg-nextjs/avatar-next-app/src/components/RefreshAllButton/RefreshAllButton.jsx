import React from 'react';
import style from './style.module.css';

function RefreshAllButton({ onClick }) {
  return (
    <div className={style['bttn-container']}>
      <button className={style['bttn-container__refresh-all']} onClick={onClick}>
        REFRESH ALL
      </button>
    </div>
  );
}

export default RefreshAllButton;
