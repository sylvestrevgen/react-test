import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './singlePostPage.module.css';
import SinglePost from '../../components/SinglePost/SinglePost';
import Button from '../../components/Button/Button';
import PostEditor from '../../components/PostEditor/PostEditor';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export default class SinglePostPage extends Component {
  state = {
    isEditing: false,
  };

  componentDidMount() {
    const { onFetchSinglePost, match } = this.props;

    onFetchSinglePost(match.params.id);
  }

  handleReturnClick = () => {
    const { history } = this.props;

    history.push('/posts');
  };

  handleToggleEditPost = () => {
    this.setState(state => ({
      isEditing: !state.isEditing,
    }));
  };

  handleUpdatePost = post => {
    const { onUpdatePost, match } = this.props;
    onUpdatePost(post, match.params.id);

    this.setState({
      isEditing: false,
    });
  };

  render() {
    const { post, isLoading } = this.props;
    const { isEditing } = this.state;

    return (
      <section className={styles.postPage}>
        <div className={styles.buttons}>
          <Button
            label="Return"
            onClick={this.handleReturnClick}
            customStyles={{ marginBottom: '30px' }}
          />
          <Button
            label={isEditing ? 'Cancel' : 'Edit post'}
            customStyles={{ marginBottom: '30px' }}
            onClick={this.handleToggleEditPost}
          />
        </div>
        {isEditing && (
          <PostEditor
            title={post.title}
            body={post.body}
            onSave={this.handleUpdatePost}
          />
        )}
        {isLoading ? <LoadingSpinner /> : <SinglePost post={post} />}
      </section>
    );
  }
}

SinglePostPage.defaultProps = {
  post: {},
  isLoading: false,
  onFetchSinglePost: () => null,
  onUpdatePost: () => null,
};

SinglePostPage.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  onFetchSinglePost: PropTypes.func,
  onUpdatePost: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
