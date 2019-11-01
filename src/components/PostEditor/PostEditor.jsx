import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styles from './postEditor.module.css';
import Button from '../Button/Button';

export default class PostEditor extends Component {
  state = {
    title: this.props.title,
    body: this.props.body,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.title === '' || this.state.body === '') {
      return toast.error('Fill in all the fields!');
    }

    this.props.onSave({ ...this.state });

    return this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          className={styles.title}
          placeholder="Typing title here..."
        />
        <textarea
          name="body"
          value={body}
          onChange={this.handleChange}
          className={styles.body}
          placeholder="Typing body here..."
        />
        <Button type="submit" label="Save Post" />
      </form>
    );
  }
}

PostEditor.defaultProps = {
  title: '',
  body: '',
  onSave: () => null,
};

PostEditor.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onSave: PropTypes.func,
};
