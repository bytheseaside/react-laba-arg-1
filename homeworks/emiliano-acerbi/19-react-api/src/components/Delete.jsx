import React from 'react';

function Delete() {
  return (
    <div className="grid place-content-center relative">
      <img src="/delete.svg" />
      <p className="absolute text-sm top-1/2 left-8 -translate-y-1/2">X</p>
    </div>
  );
}

export default Delete;
