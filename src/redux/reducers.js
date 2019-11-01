import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

export const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return payload.posts;

    case actionTypes.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== payload.id);

    case actionTypes.ADD_POST_SUCCESS:
      return [...state, payload.post];

    default:
      return state;
  }
};

export const singlePostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SINGLE_POST_SUCCESS:
      return payload.singlePost;

    case actionTypes.UPDATE_POST_SUCCESS:
      return payload.post;

    case actionTypes.ADD_COMMENT_SUCCESS: {
      const postWithNewComment = { ...state };
      postWithNewComment.comments.push(payload.comment);

      return postWithNewComment;
    }

    default:
      return state;
  }
};

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.FETCH_POSTS_START:
    case actionTypes.FETCH_SINGLE_POST_START:
    case actionTypes.ADD_POST_START:
    case actionTypes.UPDATE_POST_START:
    case actionTypes.DELETE_POST_START:
    case actionTypes.ADD_COMMENT_START:
      return true;

    case actionTypes.FETCH_POSTS_SUCCESS:
    case actionTypes.FETCH_SINGLE_POST_SUCCESS:
    case actionTypes.ADD_POST_SUCCESS:
    case actionTypes.UPDATE_POST_SUCCESS:
    case actionTypes.DELETE_POST_SUCCESS:
    case actionTypes.ADD_COMMENT_SUCCESS:
    case actionTypes.FETCH_POSTS_ERROR:
    case actionTypes.FETCH_SINGLE_POST_ERROR:
    case actionTypes.ADD_POST_ERROR:
    case actionTypes.UPDATE_POST_ERROR:
    case actionTypes.DELETE_POST_ERROR:
    case actionTypes.ADD_COMMENT_ERROR:
      return false;

    default:
      return state;
  }
};

export const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_POSTS_ERROR:
    case actionTypes.FETCH_SINGLE_POST_ERROR:
    case actionTypes.ADD_POST_ERROR:
    case actionTypes.UPDATE_POST_ERROR:
    case actionTypes.DELETE_POST_ERROR:
    case actionTypes.ADD_COMMENT_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  singlePost: singlePostReducer,
  loading: loadingReducer,
  error: errorReducer,
});
