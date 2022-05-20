import { useContext } from "react";
import { MainContext } from "../contexts/MainContexts";

export const useMenu = () => useContext(MainContext);
