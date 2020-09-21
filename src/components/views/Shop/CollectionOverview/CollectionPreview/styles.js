import styled from 'styled-components';

export const StyledCollectionPreview = styled.div`
:not(:last-child) {
  margin-bottom: 10rem;
  @media screen and (max-width: 1024px) {
    margin-bottom: 7.5rem;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 5rem;
  }
}

.preview {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.title {
  font-size: var(--font-size-l);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  span {
    height: 1px;
    background-color: var(--color-black);
    flex-grow: 1;
    margin-left: 2rem;
  }
}
`