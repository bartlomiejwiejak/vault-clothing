import React from 'react'

import {
  StyledGroup,
  StyledInput,
  StyledLabel,
  StyledErrorMessage
} from './styles';

const Input = ({ handleChange, label, isValid, isTouched, errorMessage, ...props }) => (
  <StyledGroup>
    <StyledInput onChange={handleChange} {...props} />
    {label ? (
      <StyledLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </StyledLabel>
    ) : null}
    { !isValid && isTouched && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
  </StyledGroup>
)

export default Input