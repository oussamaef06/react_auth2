import axios from 'axios';

// Set up base URL for the API
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Change the baseURL to match your Laravel backend's URL
});

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const register = (userData) => api.post('/register', userData);
export const login = (credentials) => api.post('/login', credentials);
export const logout = () => api.post('/logout');

// Users CRUD operations
export const getUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Roles CRUD operations
export const getRoles = () => api.get('/roles');
export const createRole = (roleData) => api.post('/roles', roleData);
export const updateRole = (id, roleData) => api.put(`/roles/${id}`, roleData);
export const deleteRole = (id) => api.delete(`/roles/${id}`);

// Permissions CRUD operations
export const getPermissions = () => api.get('/permissions');
export const createPermission = (permissionData) => api.post('/permissions', permissionData);
export const updatePermission = (id, permissionData) => api.put(`/permissions/${id}`, permissionData);
export const deletePermission = (id) => api.delete(`/permissions/${id}`);
