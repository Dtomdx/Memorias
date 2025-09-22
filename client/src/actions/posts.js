import {FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE, FETCH_POST} from "../constants/actionTypes";
import * as api from "../api";


export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post, history) => async(dispatch) => {
    try {
        console.log("Enviando post: ", post)
        const { data } = await api.createPost(post)
        history(`/posts`)
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}