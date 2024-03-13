import React from 'react';
import refreshIcon from '../../assets/refresh-icon.svg';
import './styles.css';

function AvatarTile({ avatarURL, onClick, isRefreshing }) {
  return (
    <div className="avatar-tile" onClick={onClick}>
      <img className="avatar-tile__img" src={avatarURL} alt="avatar img" />
      <div className={isRefreshing ? 'avatar-tile__overlay avatar-tile__overlay_loading' : 'avatar-tile__overlay'}>
        <img
          className={
            isRefreshing ? 'avatar-tile__refresh-icon avatar-tile__refresh-icon_loading' : 'avatar-tile__refresh-icon'
          }
          src={refreshIcon}
          alt="refresh img"
        />
      </div>
    </div>
  );
}

export default AvatarTile;
