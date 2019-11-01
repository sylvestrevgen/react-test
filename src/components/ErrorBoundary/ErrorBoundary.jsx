import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import InfoText from '../InfoText/InfoText';

const ErrorBoundary = ({ error, children }) => (
  <>
    {error !== null ? (
      <InfoText label="Something went wrong! Try later!" />
    ) : (
      children
    )}
  </>
);

ErrorBoundary.defaultProps = {
  error: null,
};

ErrorBoundary.propTypes = {
  error: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
  error: selectors.getError(state),
});

export default connect(mapStateToProps)(ErrorBoundary);
