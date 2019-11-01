import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './singlePost.module.css';
import { addComment } from '../../redux/operations';
import CommentsList from './CommentsList/CommentsList';
import CommentEditor from '../CommentEditor/CommentEditor';

const SinglePost = ({ post, onAddComment }) => (
  <article className={styles.post}>
    <h2 className={styles.title}>{post.title}</h2>
    <p className={styles.body}>{post.body}</p>
    <CommentsList comments={post.comments} />
    <CommentEditor onAddComment={onAddComment} />
  </article>
);

SinglePost.defaultProps = {
  post: {},
  onAddComment: () => null,
};

SinglePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  onAddComment: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onAddComment: (postId, body) => dispatch(addComment(postId, body)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SinglePost);
