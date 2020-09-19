import styled from 'styled-components';

export const StyledCart = styled.div`
flex-basis: 20%;
margin: 2rem 0;
display: flex;
flex-direction: column;
justify-content: space-between;
.items {
  overflow: scroll;
  height: 80%;
  border: 1px solid black;
  padding: 1rem;
  position: relative;
  .empty-message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: var(--default-font-size);
  }
}
`