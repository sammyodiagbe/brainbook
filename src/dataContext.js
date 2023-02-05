import { useContext } from "react";

export const dataContext = useContext("");

const DataContextProvider = ({ children }) => {
  return <dataContext.Provider value={{}}></dataContext.Provider>;
};

export default DataContextProvider;
