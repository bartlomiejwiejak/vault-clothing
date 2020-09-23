import styled from 'styled-components';

export const StyledCheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid var(--color-grey);
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
  @media screen and (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

export const StyledImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledText = styled.span`
  width: 23%;
  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const StyledQuantity = styled(StyledText)`
  display: flex;
  span {
    margin: 0 1rem;
  }
  div {
    cursor: pointer;
  }
`;

StyledQuantity.displayName = 'Quantity';

export const StyledRemoveButton = styled.div`
  padding-left: 1.5rem;
  cursor: pointer;
`;

StyledRemoveButton.displayName = 'RemoveButton';