import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
  top: -1.5rem;
  font-size: 1.4rem;
  color: var(--color-black);
`;

export const StyledGroup = styled.div`
  position: relative;
  margin: 5rem 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const StyledInput = styled.input`
  background: none;
  background-color: white;
  color: var(--color-grey);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-grey);
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

StyledInput.displayName = 'StyledInput';

export const StyledLabel = styled.label`
  color: var(--color-grey);
  font-size: var(--default-font-size);
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const StyledErrorMessage = styled.div`
  color: red;
  font-size: var(--default-font-size);
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(120%);
`

StyledLabel.displayName = 'StyledLabel';