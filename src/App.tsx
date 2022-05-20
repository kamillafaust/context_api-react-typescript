import { useState, createContext } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { MainContextProvider } from "./contexts/MainContexts";
import GlobalStyle from "./globals/style";

function App() {
  return (
    <MainContextProvider>
      <GlobalStyle />
      <Header />
      <Menu />
    </MainContextProvider>
  );
}

export default App;
