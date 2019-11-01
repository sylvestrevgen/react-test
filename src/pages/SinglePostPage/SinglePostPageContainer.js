import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import { fetchSinglePost, updatePost } from '../../redux/operations';
import SinglePostPage from './SinglePostPage';

const mapStateToProps = state => ({
  post: selectors.getSinglePost(state),
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchSinglePost: id => dispatch(fetchSinglePost(id)),
  onUpdatePost: (post, id) => dispatch(updatePost(post, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePostPage);
