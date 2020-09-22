import styled from 'styled-components';

export const StyledCheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const StyledImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
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
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

StyledQuantity.displayName = 'Quantity';

export const StyledRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

StyledRemoveButton.displayName = 'RemoveButton';