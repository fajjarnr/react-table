import axios from '../../config/axios';

import {
  GET_POST,
  CREATE_POST,
  POST_DETAILS,
  EDIT_POST,
  DELETE_POST,
} from '../types';

export const getPost = () => (dispatch) => {
  return axios
    .get('/posts')
    .then((response) =>
      dispatch({
        type: GET_POST,
        payload: { data: response.data, error: false },
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_POST,
        payload: { data: false, error: error.message },
      })
    );
};

export const getPostDetails = (id) => (dispatch) => {
  return axios
    .get(`/posts/${id}`)
    .then((response) =>
      dispatch({
        type: POST_DETAILS,
        payload: { data: response.data, error: false },
      })
    )
    .catch((error) =>
      dispatch({
        type: POST_DETAILS,
        payload: { data: false, error: error.message },
      })
    );
};

export const createPost = (data) => (dispatch) => {
  return axios
    .post('/posts', data)
    .then((response) =>
      dispatch({
        type: CREATE_POST,
        payload: { data: response.data, error: false },
      })
    )
    .catch((error) =>
      dispatch({
        type: CREATE_POST,
        payload: { data: false, error: error.message },
      })
    );
};

export const editPost = (data, id) => (dispatch) => {
  return axios
    .put(`/posts/${id}`, data)
    .then((response) =>
      dispatch({
        type: EDIT_POST,
        payload: { data: response.data, error: false },
      })
    )
    .catch((error) =>
      dispatch({
        type: EDIT_POST,
        payload: { data: false, error: error.message },
      })
    );
};

export const deletePost = (id) => {
  return axios
    .delete(`/posts/${id}`)
    .then((response) => console.log('response :>> ', response))
    .catch((error) => console.error(error.message));
};

export const deletePostData = () => (dispatch) => {
  dispatch({
    type: POST_DETAILS,
    payload: { data: false, error: false },
  });
  dispatch({
    type: CREATE_POST,
    payload: { data: false, error: false },
  });
  dispatch({
    type: EDIT_POST,
    payload: { data: false, error: false },
  });
};
