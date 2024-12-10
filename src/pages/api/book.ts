import apiClient from "./apiClient";
import {BookType} from "@/types/aboutBook";
export const getBooks = ()=>{
    return apiClient.get('/api/books');
}

export const getBookDetails=(id:string)=>{
    return apiClient.get(`/api/books/${id}`);
}

export const addBook = (params:BookType)=>{
    return apiClient.post(`/api/books`,params);
}

export const updateBook = (id:string, params:BookType)=>{
    return apiClient.put(`/api/books/${id}`, params);
}

export const deleteBook = (id:number)=>{
    return apiClient.delete(`/api/books/${id}`);
}