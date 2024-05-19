import axios from 'axios';

const username = 'username';
const password = 'password';
const token = btoa(`${username}:${password}`);

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080',
    headers: {
      'Authorization': `Basic ${token}`
    }
  }
)

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (user) => apiClient.get(`/hello-world-bean/path-variable/${user}`)