import React from 'react';
import '../styles.css';

export const AddButton = ({ onClick }) => {
  return (
    <div className="addButton" onClick={onClick}>
      <div className="verticalLine"></div>
      <div className="horizontalLine"></div>
    </div>
  );
};
