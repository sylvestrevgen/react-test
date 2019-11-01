import React from 'react';
import PropTypes from 'prop-types';
import styles from './commentsList.module.css';
import CommentsListItem from './CommentsListItem/CommentsListItem';
import InfoText from '../../InfoText/InfoText';

const CommentsList = ({ comments }) => (
  <div className={styles.listWrap}>
    <h3 className={styles.title}>Comments:</h3>
    {comments.length === 0 ? (
      <InfoText label="There are no comments for this post yet." />
    ) : (
      <ul className={styles.list}>
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentsListItem body={comment.body} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

CommentsList.defaultProps = {
  comments: [],
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default CommentsList;
