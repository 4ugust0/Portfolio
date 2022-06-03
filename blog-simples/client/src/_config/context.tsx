import React, { createContext } from "react";

type InitialStateType = {
  array: arrayType[];
};

type arrayType = {
  name: string;
};

export const JsonContext = createContext({} as InitialStateType);

export default function JsonProvider({ children }: any) {
  const array: arrayType[] = [{name: 'Kayo'}];

  return (
    <JsonContext.Provider value={{ array }}>{children}</JsonContext.Provider>
  );
}
