import { apiClient } from './ApiClient.js';

export const retrieveAllTodosForUsernameApi = (user) => apiClient.get(`/users/${user}/todos`);

export const deleteTodoApi = (user, id) => apiClient.delete(`/users/${user}/todos/${id}`);

export const retrieveTodoApi = (user, id) => apiClient.get(`/users/${user}/todos/${id}`);

export const updateTodoApi = (user, id, todo) => apiClient.put(`/users/${user}/todos/${id}`, todo);

export const createTodoApi = (user, todo) => apiClient.post(`/users/${user}/todos`, todo);