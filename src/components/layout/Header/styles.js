import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 2;
  display: flex;
  padding: 5rem 0;
  max-width: 130rem;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  mix-blend-mode: difference;
  color: var(--color-white);
  font-size: var(--default-font-size);
`
export const StyledLogo = styled(Link)`
  height: 100%;
  text-align: center;
  div {
    font-size: var(--font-size-l);
    font-weight: bold;
    line-height: 0.8;
  }
`
export const StyledOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const StyledOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
`