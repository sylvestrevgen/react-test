import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import { fetchPosts, addPost } from '../../redux/operations';
import PostsPage from './PostsPage';

const mapStateToProps = state => ({
  posts: selectors.getPosts(state),
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: () => dispatch(fetchPosts()),
  onAddPost: post => dispatch(addPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPage);
