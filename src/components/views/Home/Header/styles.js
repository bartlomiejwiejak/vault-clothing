import styled from 'styled-components';

export const StyledHeader = styled.header`
font-size: var(--font-size-xl);
font-weight: bold;
display: flex;
height: 50vh;
justify-content: center;
flex-direction: column;
max-width: 140rem;
margin: 0 auto;
.action {
  font-size: var(--font-size-m);
  margin-top: 5rem;
  margin-bottom: -5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
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