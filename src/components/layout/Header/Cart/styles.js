import styled from 'styled-components';

export const StyledCart = styled.div`
flex-basis: 20%;
display: flex;
flex-direction: column;
margin: 0 auto;
height: 100%;
padding-bottom: 2rem;
justify-content: space-between;
@media screen and (max-width: 640px) {
  height: 60%;
  margin-top: -2rem;
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