import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectError } from '../../../../redux/user/selectors';
import { StyledErrorMessage } from './styles';

const ErrorMessage = (error) => {
  return (
    error.error && <StyledErrorMessage>
      {error.error.message}
    </StyledErrorMessage>
  )
}

const mapStateToProps = createStructuredSelector({
  error: selectError
})

export default connect(mapStateToProps)(ErrorMessage);