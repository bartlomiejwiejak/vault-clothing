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
  overflow: hidden;
  span {
    display: inline-block;
  }
  .text {
    transform: translateY(100%)
  }
  .line {
    height: 1px;
    background-color: var(--color-black);
    margin-left: 2rem;
    width: 0;
  }
}
.button-container {
 overflow: hidden;
}
#button-arrow {
    justify-content: flex-end;
    margin-top: 0;
    margin-bottom: 0;
    transform: translateY(100%);
    @media screen and (max-width: 1024px) {
      margin-top: -2.5rem;
    }
  }
`