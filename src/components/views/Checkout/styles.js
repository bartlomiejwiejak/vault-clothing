import styled from 'styled-components';

export const StyledCheckout = styled.div`
 min-height: 90vh;
 min-height: calc(var(--vh, 1vh) * 90);
 display: flex;
 flex-direction: column;
 align-items: center;
 max-width: 110rem;
 margin: 0 auto;
 padding: 20rem 10rem;
 @media screen and (max-width: 1024px) {
  padding: 15rem 7rem;
 }
 @media screen and (max-width: 640px) {
  padding: 10rem 5rem;
 }
  button {
    margin-left: auto;
    margin-top: 5rem;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var;
`;

export const StyledHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-size: var(--font-size-m);
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    font-size: var(--default-font-size);
    &:last-child {
      width: 12%;
    }
  }
`;

export const StyledTotal = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 3.6rem;
`;

export const StyledWarning = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: red;
`;