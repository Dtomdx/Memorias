
import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_POST, START_LOADING, END_LOADING} from "../constants/actionTypes";


export default (state = {posts:[]}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}