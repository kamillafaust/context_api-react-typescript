import { createContext, useContext, useState } from "react";

type MainContextData = {
  showMenu: boolean;
  handleToggleMenu: () => void;
};

type MainContextProvider = {
  children: React.ReactNode;
};

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProvider) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <MainContext.Provider value={{ showMenu, handleToggleMenu }}>
      {children}
    </MainContext.Provider>
  );
};
