import React from 'react';

function Calculator({ children }) {
  return (
    <main className="w-[375px] h-[812px] text-neutral bg-neutral-calculator flex flex-col border-2 border-slate-800">
      {children}
    </main>
  );
}

export default Calculator;
