import React from 'react'

import { StyledOverlay, StyledContainer } from './styles';

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <StyledOverlay>
      <StyledContainer />
    </StyledOverlay>
  ) : <WrappedComponent {...otherProps} />
}

export default Spinner
