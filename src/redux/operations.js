import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  fetchSinglePostStart,
  fetchSinglePostSuccess,
  fetchSinglePostError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
  addPostStart,
  addPostSuccess,
  addPostError,
  updatePostStart,
  updatePostSuccess,
  updatePostError,
  addCommentStart,
  addCommentSuccess,
  addCommentError,
} from './actions';

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsStart());

  axios
    .get('https://bloggy-api.herokuapp.com/posts')
    .then(response => dispatch(fetchPostsSuccess(response.data)))
    .catch(error => dispatch(fetchPostsError(error)));
};

export const fetchSinglePost = id => dispatch => {
  dispatch(fetchSinglePostStart());

  axios
    .get(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`)
    .then(response => dispatch(fetchSinglePostSuccess(response.data)))
    .catch(error => dispatch(fetchSinglePostError(error)));
};

export const deletePost = id => dispatch => {
  dispatch(deletePostStart());

  axios
    .delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
    .then(() => {
      dispatch(deletePostSuccess(id));
      toast.success('Post deleted!');
    })
    .catch(error => dispatch(deletePostError(error)));
};

export const addPost = post => dispatch => {
  dispatch(addPostStart());

  axios
    .post('https://bloggy-api.herokuapp.com/posts', post)
    .then(response => {
      dispatch(addPostSuccess(response.data));
      toast.success('Post added!');
    })
    .catch(error => dispatch(addPostError(error)));
};

export const updatePost = (post, id) => dispatch => {
  dispatch(updatePostStart());

  axios
    .put(`https://bloggy-api.herokuapp.com/posts/${id}`, post)
    .then(response => {
      dispatch(updatePostSuccess(response.data));
      toast.success('Post updated!');
    })
    .catch(error => dispatch(updatePostError(error)));
};

export const addComment = (id, commentBody) => dispatch => {
  dispatch(addCommentStart());

  axios
    .post('https://bloggy-api.herokuapp.com/comments', {
      postId: id,
      body: commentBody,
    })
    .then(response => {
      dispatch(addCommentSuccess(response.data));
      toast.success('Comment added!');
    })
    .catch(error => dispatch(addCommentError(error)));
};
