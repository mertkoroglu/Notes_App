import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000"});

export const getPosts = () => api.get("/");
export const deletePost = (id) => api.delete(`/${id}`);
export const addPost = (data) => api.post("/new", data);
export const editPost = (data) => api.post(`/edit/${data._id}`, data);
export const changeColor = (data, id) => api.post("/", {data, id});