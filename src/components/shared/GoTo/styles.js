import styled from 'styled-components';

export const StyledGoTo = styled.div`
text-align: center;
font-size: var(--font-size-xxxl);
cursor: pointer;
margin-top: 20rem;
overflow: hidden;
@media screen and (max-width: 1024px) {
    margin-top: 15rem;
   font-size: var(--font-size-xxl);
 }
 @media screen and (max-width: 640px) {
    margin-top: 10rem;
 }
 .container {
   transform: translateY(100%);
 }
i {
  transform: translateX(25%);
  transition: .3s ease-out;
}
:hover i {
  transform: translateX(50%);
}
`