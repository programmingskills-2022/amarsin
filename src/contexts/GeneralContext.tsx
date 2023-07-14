"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const GeneralContext = createContext<ContextType>({} as ContextType);

interface ProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: ProviderProps) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const contextValue: ContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
};

export function useGeneralContext() {
  const context = useContext(GeneralContext);

  if (!context) throw new Error("خطا !");

  return context;
}
