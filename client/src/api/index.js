import axios from "axios";


const API = axios.create(
    {
        baseURL: "http://localhost:5000"
    }
)

export const fetchPosts = () => API.get(`/posts`)

export const createPost = (newPost) => API.post(`/posts`, newPost);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost)
export const deletePost = (id) => API.delete(`/posts/${id}`)


/* Auth */
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);

/* LIKEPOST */
export const likePost = (postId) => API.patch(`/posts/${postId}`)