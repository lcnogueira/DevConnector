import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  UPDATE_POST,
  GET_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
        posts: state.posts.map(
          post => (post._id !== action.payload._id ? post : action.payload)
        )
      };
    default:
      return state;
  }
}
