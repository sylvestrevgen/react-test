import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import styles from './commentEditor.module.css';
import Button from '../Button/Button';

class CommentEditor extends Component {
  state = {
    body: '',
  };

  handleChange = event => {
    this.setState({
      body: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { body } = this.state;
    const { match, onAddComment } = this.props;

    if (body === '') {
      return toast.error("You can't add empty comment!");
    }

    onAddComment(match.params.id, body);

    return this.setState({
      body: '',
    });
  };

  render() {
    const { body } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={body}
          onChange={this.handleChange}
          className={styles.input}
        />
        <Button type="submit" label="Add comment" />
      </form>
    );
  }
}

CommentEditor.defaultProps = {
  onAddComment: () => null,
};

CommentEditor.propTypes = {
  onAddComment: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(CommentEditor);
