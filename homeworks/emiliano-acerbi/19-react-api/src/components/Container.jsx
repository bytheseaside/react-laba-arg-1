import React from 'react';

function Container({ children }) {
  return <div className="min-h-screen bg-neutral grid place-content-center font-primary">{children}</div>;
}

export default Container;
