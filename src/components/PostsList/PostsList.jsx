import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './postsList.module.css';
import { deletePost } from '../../redux/operations';
import PostsListItem from './PostsListItem/PostsListItem';
import Button from '../Button/Button';

const PostsList = ({ posts, onDeletePost }) => {
  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <li key={post.id} className={styles.listItem}>
          <Link to={`/posts/${post.id}`} className={styles.link}>
            <PostsListItem post={{ ...post }} />
          </Link>
          <Button
            label="Delete post"
            customStyles={{ marginTop: '20px' }}
            onClick={() => onDeletePost(post.id)}
          />
        </li>
      ))}
    </ul>
  );
};

PostsList.defaultProps = {
  posts: [],
  onDeletePost: () => null,
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
  onDeletePost: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onDeletePost: id => dispatch(deletePost(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(PostsList);
