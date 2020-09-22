import styled from 'styled-components';

export const StyledButtonArrow = styled.span`
  font-size: var(--font-size-m);
  margin-top: 5rem;
  margin-bottom: -5rem;
  display: flex;
  padding-right: 2rem;
  .link {
    display: inline-flex !important;
    align-items: center;
    cursor: pointer;
  }
  i {
    font-size: var(--font-size-xl);
    margin-left: 1rem;
    transition: .3s ease-out;
  }
  :hover i{
    transform: translateX(25%);
  }
`