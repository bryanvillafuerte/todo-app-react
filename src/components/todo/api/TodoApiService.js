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

export const retrieveAllTodosForUsernameApi = (user) => apiClient.get(`/users/${user}/todos`);

export const deleteTodoApi = (user, id) => apiClient.delete(`/users/${user}/todos/${id}`);

export const retrieveTodoApi = (user, id) => apiClient.get(`/users/${user}/todos/${id}`);