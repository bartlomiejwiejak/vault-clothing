import styled from 'styled-components';

export const StyledCollectionItem = styled.div`
flex-basis: 23%;
position: relative;
:hover .image {
  background-size: 120%;
  filter: brightness(0.4);
}
.image {
  background-size: 100%;
  background-position: center;
  height: 35rem;
  transition: 1s ease-out;
}
footer {
  font-size: var(--font-size-m);
  display: flex;
  justify-content: space-between;
}
button {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
}
:hover button {
  transform: translate(-50%, -50%);
  }
`