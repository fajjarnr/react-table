import { GET_POST, CREATE_POST, POST_DETAILS, EDIT_POST } from '../types';

const initialState = {
  posts: [],
  error: false,
  postDetail: [],
  errorDetail: false,
  createPost: false,
  errorCreate: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload.data,
        error: action.payload.error,
      };
    case POST_DETAILS:
      return {
        ...state,
        postDetail: action.payload.data,
        errorDetail: action.payload.error,
      };
    case CREATE_POST:
      return {
        ...state,
        createPost: action.payload.data,
        errorCreate: action.payload.error,
      };
    case EDIT_POST:
      return {
        ...state,
        postDetail: action.payload.data,
        errorDetail: action.payload.error,
      };
    default:
      return state;
  }
};

export default posts;
