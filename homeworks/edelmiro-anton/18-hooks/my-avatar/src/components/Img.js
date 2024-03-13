import React from 'react';
import '../styles.css';
import refresh from '../assets/refresh-button.svg';

export const Img = ({ src, onClick }) => {
  return (
    <>
      <img src={refresh} onClick={onClick} alt="refresh-button" className="refreshButton" />
      <img src={src} alt="" className="avatar" />
    </>
  );
};
