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
  align-items: center;
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
export const StyledBurger = styled.div`
height: 5rem;
width: 5rem;
position: relative;
cursor: pointer;
 div:nth-child(1) {
  height: 0.2rem;
  width: 3rem;
  background-color: var(--color-white);
  position: absolute;
  left: 1rem;
  top: 2rem;
}
div:nth-child(2) {
  height: 0.2rem;
  width: 3rem;
  background-color: var(--color-white);
  position: absolute;
  left: 1rem;
  bottom: 2rem;
}
`
export const StyledDropdown = styled.div`
height: 50vh;
width: 100vw;
position: fixed;
overflow: hidden;
background-color: var(--color-light);
left: 0;
top: 0;
transform: translateY(-100%);
.content {
 display: flex;
 justify-content: space-between;
 max-width: 130rem;
 margin: 0 auto;
 margin-top: 10rem;
 height: calc(50vh - 10rem);
 transform: translateY(100%);
}
`
export const StyledMenu = styled.ul`
flex-basis: 30%;
display: flex;
margin: 2rem 0;
flex-direction: column;
justify-content: space-between;
list-style: none;
span {
  font-size: var(--font-size-m);
}
`
export const StyledContact = styled.ul`
flex-basis: 30%;
display: flex;
flex-direction: column;
margin: 2rem 0;
justify-content: space-between;
list-style: none;
li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    font-size: var(--font-size-m);
    font-weight: bold;
  }
}
> span {
  font-size: var(--font-size-m);
}
`
export const StyledCart = styled.div`
flex-basis: 30%;

`