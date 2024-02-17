import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = (props) => {
  const [user, setUser] = useState({});

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
