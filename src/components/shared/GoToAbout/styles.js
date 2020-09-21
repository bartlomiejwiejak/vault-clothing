import styled from 'styled-components';

export const StyledGoToAbout = styled.div`
text-align: center;
font-size: var(--font-size-xxxl);
cursor: pointer;
margin-top: 20rem;
i {
  transform: translateX(25%);
  transition: .3s ease-out;
}
:hover i {
  transform: translateX(50%);
}
`