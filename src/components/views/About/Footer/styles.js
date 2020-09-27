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
.contact {
  width: 80%;
  margin: 0 1.5% 0 auto;
  text-align: center;
  margin-top: 20rem;
  @media only screen and (max-width: 1024px) {
    margin-top: 15rem;
  }
  @media only screen and (max-width: 640px) {
    margin-top: 10rem;
  }
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
  .mark {
    height: 5px;
    background-color: var(--color-black);
  }
  .touch {
    font-size: var(--font-size-xxxxxxxl);
    white-space: nowrap;
    @media only screen and (max-width: 1024px) {
    font-size: var(--font-size-xxxxxxl);
    }
    @media only screen and (max-width: 640px) {
    font-size: var(--font-size-xxxxxl);
    }
  }
  .email {
    font-size: var(--font-size-xxxxxl);
    white-space: nowrap;
    @media only screen and (max-width: 1024px) {
    font-size: var(--font-size-xxxxl);
    }
    @media only screen and (max-width: 640px) {
    font-size: var(--font-size-xxxl);
    }
  }
}
`