import { createContext, useState } from "react";

const userContextDefaultValue = {
  user: { name: "", image: "" },
  setUser: (user) => user,
};

export const userContext = createContext(userContextDefaultValue);

export const UserProvider = ({ children }) => {
  const { user, setUser } = useState({});

  const value = {
    user,
    setUser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
