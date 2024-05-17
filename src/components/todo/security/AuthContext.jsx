import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

  const [number, setnumber] = useState(0);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  setInterval(() => setnumber(number + 1), 10000);

  const valueToBeShared = { number, isAuthenticated, setIsAuthenticated };

  return (
    <AuthContext.Provider value={ valueToBeShared }>
      {children}
    </AuthContext.Provider>
  );

}