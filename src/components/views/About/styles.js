import styled from 'styled-components';

import aboutHeader from '../../../assets/about-header.jpg';

export const StyledAbout = styled.div`
`
export const StyledHeader = styled.header`
height: 100vh;
height: calc(var(--vh,1vh)*100);
width: 100vw;
overflow: hidden;
position: relative;
.lines-box {
  position: absolute;
  width: 100vw;
  max-width: 150rem;
  left: 50%;
  bottom: 5vw;
  transform: translateX(-50%);
  color: var(--color-white);
  font-size: var(--font-size-xl);
  padding: 0 5rem;
  @media screen and (max-width: 1200px) {
   font-size: var(--font-size-l);
  }
  @media screen and (max-width: 1024px) {
   padding: 0 3rem;
  }
  @media screen and (max-width: 800px) {
   font-size: var(--font-size-m);
  }
  @media screen and (max-width: 640px) {
   font-size: var(--default-font-size);
   bottom: 10vw;
   padding: 0 2rem;
  }
  h1 {
  font-size: var(--font-size-l);
  margin-bottom: 5rem;
  @media screen and (max-width: 800px) {
   font-size: var(--font-size-m);
   margin-bottom: 2rem;
   font-weight: 400;
  }
  }
  > * {
    white-space: nowrap;
  }
}
img {
  position: absolute;
  left: -.5%;
  top: 0;
  width: 101%;
  height: 101%;
  background-image: url(${aboutHeader});
  background-size: cover;
  background-position: center;
}
`