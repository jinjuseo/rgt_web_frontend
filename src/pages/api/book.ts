import apiClient from "./apiClient";
// import {BookType} from "@/types/aboutBook";
export const getBooks = ()=>{
    return apiClient.get('/api/books');
}

export const getBookDetails=(id:number)=>{
    return apiClient.get(`/api/book/${id}`);
}

export const addBook = (params:{})=>{
    return apiClient.post(`/api/books/${params}`);
}

export const updateBook = (id:number, params:{})=>{
    return apiClient.put(`/api/books/${id}`, params);
}

export const deleteBook = (id:number)=>{
    return apiClient.delete(`/api/books/${id}`);
}