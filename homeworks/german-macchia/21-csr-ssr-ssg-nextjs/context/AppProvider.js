import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const initialValue = 0
  const [reload, setReload] = useState(false);
  const [quantity, setQuantity] = useState(initialValue);

  const initialData = {
    avatarQuantity: {
      quantity,
      setQuantity,
    },
    reloadAll: {
      reload,
      setReload,
    },
  };

  return (
    <AppContext.Provider value={initialData}>{children}</AppContext.Provider>
  );
};
