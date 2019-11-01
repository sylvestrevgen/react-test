import React from 'react';
import PropTypes from 'prop-types';
import styles from './postsListItem.module.css';

const PostsListItem = ({ post }) => (
  <article className={styles.post}>
    <h3 className={styles.title}>{post.title}</h3>
    <p className={styles.body}>{post.body}</p>
  </article>
);

PostsListItem.defaultProps = {
  post: {},
};

PostsListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default PostsListItem;
