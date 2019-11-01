import actionTypes from './actionTypes';

export const fetchPostsStart = () => ({
  type: actionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: {
    posts,
  },
});

export const fetchPostsError = error => ({
  type: actionTypes.FETCH_POSTS_ERROR,
  payload: {
    error,
  },
});

export const fetchSinglePostStart = () => ({
  type: actionTypes.FETCH_SINGLE_POST_START,
});

export const fetchSinglePostSuccess = singlePost => ({
  type: actionTypes.FETCH_SINGLE_POST_SUCCESS,
  payload: {
    singlePost,
  },
});

export const fetchSinglePostError = error => ({
  type: actionTypes.FETCH_SINGLE_POST_ERROR,
  payload: {
    error,
  },
});

export const deletePostStart = () => ({
  type: actionTypes.DELETE_POST_START,
});

export const deletePostSuccess = id => ({
  type: actionTypes.DELETE_POST_SUCCESS,
  payload: {
    id,
  },
});

export const deletePostError = () => ({
  type: actionTypes.DELETE_POST_ERROR,
});

export const addPostStart = () => ({
  type: actionTypes.ADD_POST_START,
});

export const addPostSuccess = post => ({
  type: actionTypes.ADD_POST_SUCCESS,
  payload: {
    post,
  },
});

export const addPostError = error => ({
  type: actionTypes.ADD_POST_ERROR,
  payload: {
    error,
  },
});

export const updatePostStart = () => ({
  type: actionTypes.UPDATE_POST_START,
});

export const updatePostSuccess = post => ({
  type: actionTypes.UPDATE_POST_SUCCESS,
  payload: {
    post,
  },
});

export const updatePostError = error => ({
  type: actionTypes.UPDATE_POST_ERROR,
  payload: {
    error,
  },
});

export const addCommentStart = () => ({
  type: actionTypes.ADD_COMMENT_START,
});

export const addCommentSuccess = comment => ({
  type: actionTypes.ADD_COMMENT_SUCCESS,
  payload: {
    comment,
  },
});

export const addCommentError = error => ({
  type: actionTypes.ADD_COMMENT_ERROR,
  payload: {
    error,
  },
});
