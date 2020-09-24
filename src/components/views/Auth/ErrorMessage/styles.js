import styled from 'styled-components';

export const StyledErrorMessage = styled.span`
text-align: center;
color: red;
font-size: var(--font-size-m);
flex-basis: 90%;
margin-bottom: 3rem;
margin-top: -7rem;
@media screen and (max-width: 640px) {
  margin-bottom: 1.5rem;
  margin-top: -3.5rem;
}
`