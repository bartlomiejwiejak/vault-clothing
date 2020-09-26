import styled from 'styled-components';

export const StyledFooter = styled.footer`
padding: 20rem 0;
@media only screen and (max-width: 640px) {
  padding: 10rem 0;
}
.line { 
  display: inline-flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-size: var(--font-size-xxxxxl);
  color: var(--color-gold);
  font-weight: bold;
  margin: 1rem 0;
  @media only screen and (max-width: 640px) {
    font-size: var(--font-size-xxxxl);
    margin: 0 0;
  }
}
.line-left {
  animation: roll-left 7.5s linear infinite;
}
.line-right {
  animation: roll-right 7.5s linear infinite;
  transform: translate3d(-50%, 0, 0);
}
span {
  padding: 0 1rem;
}
`