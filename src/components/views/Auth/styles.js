import styled from 'styled-components';

export const StyledAuth = styled.div`
  max-width: 100rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20rem 0;
  font-size: var(--default-font-size);
  @media screen and (max-width: 640px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    padding: 15rem 0;
    > div:first-of-type {
      margin-bottom: 7.5rem;
    }
  }
`;