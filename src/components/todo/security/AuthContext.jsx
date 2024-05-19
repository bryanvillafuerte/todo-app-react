import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState();

  function login(username, password) {
    if (username === 'bryanvillafuerte' && password === 'dummy') {
      setIsAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setIsAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
  }

  const valueToBeShared = { isAuthenticated, login, logout, username };

  return (
    <AuthContext.Provider value={ valueToBeShared }>
      {children}
    </AuthContext.Provider>
  );

}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
