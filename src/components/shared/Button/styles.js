import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  letter-spacing: 0.5rem;
  background-color: var(--color-black);
  color: var(--color-white);
  text-transform: uppercase;
  display: inline-block;
  padding: 1rem 2rem;
  font-size: var(--default-font-size);
  font-weight: bold;
  white-space: nowrap;
  font-family: 'Open Sans Condensed';
  border: 1px solid var(--color-black);
  cursor: pointer;
  box-sizing: border-box;
  transition: .3s;
  outline: none;
  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);;
  }
  ${props => {
    if (props.isGoogle) {
      return css`
        background-color: #4285f4;
        border: 1px solid #4285f4;
        color: white;
        &:hover {
        background-color: #357ae8;
        border: 1px solid #357ae8;
        }
        `
    }
  }
  }
  ${props => {
    if (props.inverted) {
      return css`
         background-color: var(--color-white);
         color:var(--color-black);
         border: 1px solid var(--color-black);
        &:hover {
         background-color: var(--color-black);
         color: var(--color-white);
         border: 1px solid var(--color-black);
    }
        `
    }
  }
  }
  :disabled {
    background-color: var(--color-grey);
    cursor: auto;
    color: var(--color-white);
  }
`