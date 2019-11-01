import React from 'react';
import PropTypes from 'prop-types';
import styles from './commentsListItem.module.css';

const CommentsListItem = ({ body }) => (
  <div className={styles.comment}>
    <p className={styles.title}>{body}</p>
  </div>
);

CommentsListItem.defaultProps = {
  body: '',
};

CommentsListItem.propTypes = {
  body: PropTypes.string,
};

export default CommentsListItem;
