import React from 'react';

function Divider() {
  return (
    <div className="grid place-content-center gap-2">
      <div className="w-[5px] h-[5px] rounded-full mx-auto bg-primary"></div>
      <div className="w-7 h-[3px] bg-primary"></div>
      <div className="w-[5px] h-[5px] rounded-full mx-auto bg-primary"></div>
    </div>
  );
}

export default Divider;
