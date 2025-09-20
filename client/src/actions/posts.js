import {FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE, FETCH_POST} from "../constants/actionTypes";
import * as api from "../api";


export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        console.log("Enviando post: ", post)
        const { data } = await api.createPost(post)
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}