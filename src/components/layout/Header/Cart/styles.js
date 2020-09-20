import styled from 'styled-components';

export const StyledCart = styled.div`
flex-basis: 20%;
margin: 2rem 0;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 2rem auto;
@media screen and (max-width: 640px){
margin: 0 auto 2rem;
}
>span {
  font-size: var(--font-size-m);
}
.items {
  overflow: scroll;
  height: 70%;
  border: 1px solid black;
  padding: 1rem;
  position: relative;
  font-size: var(--default-font-size);
  .empty-message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  }
}
`