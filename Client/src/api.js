import axios from "axios";

const API_URL = "http://localhost:5000/products"; 

export const fetchProducts = () => axios.get(API_URL);
export const addProduct = (product) => axios.post(`${API_URL}/save`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
export const softDeleteProduct = (id) => axios.patch(`${API_URL}/soft-delete/${id}`);
