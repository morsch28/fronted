import { createContext, useContext, useEffect, useState } from "react";
import userServices from "../services/userServices";

export const authContext = createContext();
authContext.displayName = "Auth";

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(userServices.getUserFromToken());
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (authData) {
      const loadUser = async () => {
        try {
          const userId = await userServices.getUserById(authData._id);
          setUser(userId);
          return userId;
        } catch (error) {
          console.log(error);
        }
      };
      loadUser();
    }
  }, [authData]);

  const login = async (credential) => {
    try {
      const response = await userServices.signIn(credential);
      setAuthData(userServices.getUserFromToken());
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    userServices.logout();
    setUser(userServices.getUserFromToken());
    setAuthData(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout, authData }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
