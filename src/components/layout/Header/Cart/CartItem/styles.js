import styled from 'styled-components';

export const StyledCartItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
.image-container {
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
  margin-right: 2rem;
  img {
    width: 100%;
  }
}
.details {
  display: flex;
  flex-direction: column;
  font-size: var(--default-font-size);
}
`