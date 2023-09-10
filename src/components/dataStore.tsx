// DataStore.tsx

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Action, InitialState, initialState, reducer } from "./reducer";

interface ReactJsx {
  children: ReactNode;
}

export const DataStoreContext = createContext<
  | {
      state: InitialState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

export const DataStore = ({ children }: ReactJsx) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </DataStoreContext.Provider>
  );
};

export const useDataStore = () => {
  const context = useContext(DataStoreContext);
  if (!context) throw new Error("Something Went Wrong");
  return context;
};
