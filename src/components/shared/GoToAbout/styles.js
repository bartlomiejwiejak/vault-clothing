import styled from 'styled-components';

export const StyledGoToAbout = styled.div`
text-align: center;
font-size: var(--font-size-xxxl);
cursor: pointer;
margin-top: 20rem;
@media screen and (max-width: 1024px) {
    margin-top: 15rem;
   font-size: var(--font-size-xxl);
 }
 @media screen and (max-width: 640px) {
    margin-top: 10rem;
 }
i {
  transform: translateX(25%);
  transition: .3s ease-out;
}
:hover i {
  transform: translateX(50%);
}
`