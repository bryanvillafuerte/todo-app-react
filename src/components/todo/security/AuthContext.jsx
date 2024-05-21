import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { apiClient } from '../api/ApiClient.js';
import { executeJwtAuthenticationService } from '../api/AuthenticationApiService.js';

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  /*async function login(username, password) {
    const baToken = 'Basic ' + btoa(`${username}:${password}`);

    try {
      const response = await executeBasicAuthenticationService(baToken);

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use(config => {
          console.log('intercepting and adding token');
          config.headers.Authorization = baToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }*/

  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(username, password);

      if (response.status === 200) {
        const jwtToken = 'Bearer ' + response.data.token;

        setIsAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);

        apiClient.interceptors.request.use(config => {
          config.headers.Authorization = jwtToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  const valueToBeShared = { isAuthenticated, login, logout, username, token };

  return (
    <AuthContext.Provider value={ valueToBeShared }>
      {children}
    </AuthContext.Provider>
  );

}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
