import styled from 'styled-components';

export const StyledCollectionItem = styled.div`
position: relative;
overflow: hidden;
:hover .image {
  background-size: 130%;
  filter: brightness(0.4);
}
.container {
  transform: translateY(100%) scale(0);
}
.image {
  background-size: 120%;
  background-position: center;
  height: 35rem;
  transition: 1s ease-out;
 @media screen and (max-width: 640px) {
  height: 27.5rem;
 }
}
footer {
  font-size: var(--font-size-m);
  display: flex;
  justify-content: space-between;
  .name {
  white-space: nowrap;
  }
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