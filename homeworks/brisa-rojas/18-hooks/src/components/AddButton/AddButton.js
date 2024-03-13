import React from 'react';
import './styles.css';

const AddButton = ({ onClick }) => {
  return (
    <div className="add-avatar-tile" onClick={onClick}>
      +
    </div>
  );
};

export default AddButton;
