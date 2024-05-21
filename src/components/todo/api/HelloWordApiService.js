import { apiClient } from './ApiClient.js';

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (user) => apiClient.get(`/hello-world-bean/path-variable/${user}`)