import styled from 'styled-components';

export const StyledCollectionItem = styled.div`
flex-basis: 24%;
position: relative;
margin-bottom: 5rem;
@media screen and (max-width: 1024px) {
  flex-basis: 49%;
 }
:hover .image {
  background-size: 130%;
  filter: brightness(0.4);
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