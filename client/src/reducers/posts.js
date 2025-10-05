
import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_POST, START_LOADING, END_LOADING} from "../constants/actionTypes";


export default (state = {posts:[]}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            }
        case CREATE:
            return {...state, posts: [...state.posts, action.payload]}
        case UPDATE:
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}
        case DELETE:
            return {...state, posts: state.posts.filter((post) => post._id !== action.payload)}
        default:
            return state
    }
}