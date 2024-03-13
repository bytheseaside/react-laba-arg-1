import React from 'react';
function Display({ lastOperation, calculator }) {
  return (
    <div className="flex-1 flex flex-col justify-end items-end p-5">
      <div className="flex text-size-secondary font-light">
        <p className="">{lastOperation.secondInput && lastOperation.secondInput}</p>
        <p className="">{lastOperation.sign && lastOperation.sign}</p>
        <p className="">{lastOperation.firstInput !== '0' && lastOperation.firstInput}</p>
      </div>
      <div className="flex text-size-primary">
        <p className="">{calculator.secondInput !== 0 && calculator.secondInput}</p>
        <p className="">{calculator.sign && calculator.sign}</p>
        <p className="">{calculator.firstInput && calculator.firstInput}</p>
      </div>
    </div>
  );
}

export default Display;
