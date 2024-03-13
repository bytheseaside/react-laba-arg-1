import React from 'react';
import Image from 'next/image';
import style from './style.module.css';

function AvatarCard({ onClick, avatarImg }) {
  return (
    <div className={style.card}>
      <img src={avatarImg} alt="AvatarImg"></img>
      <Image
        layout="fill"
        className={style['card__refresh-icon']}
        src="/images/refresh.svg"
        alt="refreshImG"
        onClick={onClick}
      ></Image>
    </div>
  );
}

export default AvatarCard;
