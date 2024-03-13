import React from 'react';

function Container({ children }) {
  return <main className="min-h-screen font-primary text-3xl flex flex-col items-center gap-5">{children}</main>;
}

export default Container;
