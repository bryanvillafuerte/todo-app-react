import { apiClient } from './ApiClient.js';

export const executeBasicAuthenticationService = (token) => {
  return apiClient.get('/basicauth', {
    headers: {
      authorization: token
    }
  });
}

export const executeJwtAuthenticationService
  = (username, password) =>
  apiClient.post('/authenticate', {username, password});