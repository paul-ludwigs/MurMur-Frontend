import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkIfTokenValid = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/users/verify`,
            { headers: { token: token } }
          );
          if (res.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
       // set this to false in order to activate authentication!!!
        setIsAuthenticated(false);
      }
    };
    checkIfTokenValid();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;