import styled from 'styled-components';

export const StyledHeader = styled.header`
font-size: var(--font-size-xl);
font-weight: bold;
display: flex;
height: 50vh;
height: calc(var(--vh, 1vh) * 50);
justify-content: center;
flex-direction: column;
max-width: 150rem;
margin: 0 auto;
padding: 0 5rem;
@media screen and (max-width: 1024px) {
   padding: 0 3rem;
 }
 @media screen and (max-width: 800px) {
  font-size: var(--font-size-l);
 }
 @media screen and (max-width: 640px) {
   font-size: var(--font-size-m);
   padding: 0 2rem;
 }
.action {
  font-size: var(--font-size-m);
  margin-top: 5rem;
  margin-bottom: -5rem;
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
}
`