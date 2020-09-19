import styled, { css } from 'styled-components';

export const StyledMenuButton = styled.div`
cursor: pointer;
position: relative;
display: inline-block;
letter-spacing: .1rem;
::after {
  content: '';
  position: absolute;
  bottom: -.2rem;
  left: 0;
  width: 0;
  height: 0.2rem;
  transition: .3s ease-out;
  ${props => {
    return css`
      background-color: ${props.color};
      `
  }
  }
}
:hover::after {
width: 100%;
}
${props => {
    return css`
    font-size: ${props.size};
    color: ${props.color};
    font-weight: ${props.bold ? 'bold' : '400'};
    `
  }
  }
`