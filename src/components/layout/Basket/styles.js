import styled, { css } from 'styled-components';

export const StyledBasket = styled.div`
position: fixed;
right: 3vw;
bottom: 3vw;
font-size: var(--font-size-xl);
z-index: 1;
mix-blend-Mode: difference;
color: var(--color-white);
transform: scale(0);
display: flex;
flex-direction: column;
align-items: center;
i {
  cursor: pointer;
}
${props => {
    if (props.disabled) {
      return css`
      color: var(--color-grey);
      i {
        cursor: auto;
      }
    `
    }
  }
  }
.link {
  display: flex!important;
  flex-direction: column;
  align-items: center;
}
span {
  font-size: var(--font-size-l);
  margin-top: -.5rem;
}
`