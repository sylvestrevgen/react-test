import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './postsPage.module.css';
import PostEditor from '../../components/PostEditor/PostEditor';
import PostsList from '../../components/PostsList/PostsList';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export default class PostsPage extends Component {
  componentDidMount() {
    const { onFetchPosts } = this.props;

    onFetchPosts();
  }

  handleSavePost = post => {
    const { onAddPost } = this.props;

    onAddPost(post);
  };

  render() {
    const { posts, isLoading } = this.props;
    return (
      <section className={styles.postsPage}>
        <PostEditor onSave={this.handleSavePost} />
        <PostsList posts={posts} />
        {isLoading && <LoadingSpinner />}
      </section>
    );
  }
}

PostsPage.defaultProps = {
  onFetchPosts: () => null,
  onAddPost: () => null,
  posts: [],
  isLoading: false,
};

PostsPage.propTypes = {
  onFetchPosts: PropTypes.func,
  onAddPost: PropTypes.func,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
  isLoading: PropTypes.bool,
};
