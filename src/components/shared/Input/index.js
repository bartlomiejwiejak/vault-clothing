import React from 'react'

import {
  StyledGroup,
  StyledInput,
  StyledLabel
} from './styles';

const Input = ({ handleChange, label, ...props }) => {
  return (
    <StyledGroup>
      <StyledInput onChange={handleChange} {...props} />
      {label ? (
        <StyledLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </StyledLabel>
      ) : null}
    </StyledGroup>
  )
}

export default Input
