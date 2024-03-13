import React from 'react';
import '../styles.css';

export const RefreshAllBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btnRefreshAll">
      Refresh All
    </button>
  );
};
