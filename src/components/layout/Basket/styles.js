import styled from 'styled-components';

export const StyledBasket = styled.div`
position: fixed;
right: 3vw;
bottom: 3vw;
font-size: var(--font-size-xl);
z-index: 1;
mix-blend-Mode: difference;
color: var(--color-white);
transform: scale(0);
.link {
  display: flex!important;
  flex-direction: column;
  align-items: center;
}
span {
  font-size: var(--font-size-l);
  margin-top: -.5rem;
}
i {
  cursor: pointer;
}
`