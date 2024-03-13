import React from 'react';
import styles from './styles.module.css';

function AvatarTile({ avatarURL, onClick, isRefreshing }) {
  
  return (
    <div className={styles['avatar-tile']} onClick={onClick}>
      <img className={styles['avatar-tile__img']} src={avatarURL} alt="avatar img" />
      <div
        className={`${styles['avatar-tile__overlay']} ${isRefreshing ? styles['avatar-tile__overlay_loading'] : ''}`}
      >
        <img
          className={`${styles['avatar-tile__refresh-icon']} ${isRefreshing ? styles['avatar-tile__refresh-icon_loading'] : ''}`}
          src={'/refresh.svg'}
          alt="refresh img"
        />
      </div>
    </div>
  );
}

export default AvatarTile;
