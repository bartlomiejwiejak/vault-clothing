import styled from 'styled-components';

export const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  padding: 0 2.5rem;
  @media screen and (max-width: 640px) {
    width: 80%;
    padding: 0 1rem;
  }
`;

export const StyledTitle = styled.h2`
  margin: 1rem 0;
`;

export const StyledButtonsBar = styled.div`
  display: flex;
  justify-content: space-between;
  :nth-last-child() {
    margin-left: 2rem;
  }
`;