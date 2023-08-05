import { createContext, useContext, useState, ReactNode, FC } from "react";

const initState = {
  a: 1,
  b: 100,
};

type AppStateContextType = {
  appState: typeof initState;
  setAppState: (newState: typeof initState) => void;
};

const AppStateContext = createContext<AppStateContextType | null>(null);

export const useAppState = () =>
  useContext(AppStateContext) as AppStateContextType;

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [appState, setAppState] = useState(initState);
  const value = {
    appState,
    setAppState,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};
