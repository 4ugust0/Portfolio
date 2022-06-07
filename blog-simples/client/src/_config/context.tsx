import React, { createContext } from "react";

interface InitialStateInterface {
  filtering: () => void;
}

const defaultValue: InitialStateInterface = {
  filtering: () => {},
};

export const JsonContext = createContext<InitialStateInterface>(defaultValue);

export default function JsonProvider({ children }: any) {
  const filtering = () => {
    return alert("Olá Mundo");
  };

  return (
    <JsonContext.Provider value={{ filtering }}>
      {children}
    </JsonContext.Provider>
  );
}
