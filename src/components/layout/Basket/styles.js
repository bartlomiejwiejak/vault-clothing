import styled from 'styled-components';

export const StyledBasket = styled.div`
position: fixed;
right: 3vw;
bottom: 3vw;
font-size: var(--font-size-xl);
z-index: 1;
mix-blend-Mode: difference;
color: var(--color-white);
display: flex;
flex-direction: column;
align-items: center;
transform: scale(0);
span {
  font-size: var(--font-size-l);
  margin-top: -.5rem;
}
i {
  cursor: pointer;
}
`