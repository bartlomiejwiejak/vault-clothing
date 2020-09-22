import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  width: 100vw;
  transform: translateX(-50%);
  pointer-events: none;
  display: flex;
  padding: 5rem 5rem;
  max-width: 150rem;
  top: 0;
  left: 50%;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;
  color: var(--color-white);
  font-size: var(--default-font-size);
  @media screen and (max-width: 1200px){
    padding: 4rem 4rem;
  }
  @media screen and (max-width: 1024px){
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 800px){
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 640px){
    padding: 1rem 1rem;
  }
`
export const StyledLogo = styled.div`
  height: 100%;
  text-align: center;
  pointer-events: auto;
  cursor: pointer;
  span {
    font-size: var(--font-size-l);
    font-weight: bold;
    display: block;
    overflow: hidden;
    span {
      margin-top: -1rem;
      line-height: 1.3;
      transform: translateY(100%);
    }
  }
`
export const StyledBurger = styled.div`
height: 5rem;
width: 5rem;
position: relative;
pointer-events: auto;
cursor: pointer;
 div:nth-child(1) {
  height: 0.2rem;
  width: 0;
  background-color: var(--color-white);
  position: absolute;
  left: 1rem;
  top: 2rem;
}
div:nth-child(2) {
  height: 0.2rem;
  width: 0;
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
z-index: 2;
overflow: hidden;
background-color: var(--color-light);
left: 0;
top: 0;
transform: translateY(-100%);
@media screen and (max-width: 640px) {
  height: 70vh;
 }
.content {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 max-width: 150rem;
 margin: 12rem auto 0;
 height: calc(50vh - 12rem);
 transform: translateY(100%);
 padding: 0 5rem;
 @media screen and (max-width: 1024px) {
  padding: 0 3rem;
 }
 @media screen and (max-width: 640px) {
   padding: 0 2rem;
   margin: 7rem auto 0;
   height: calc(70vh - 7rem);
 }
}
`
export const StyledMenu = styled.ul`
flex-basis: 30%;
display: flex;
flex-direction: column;
justify-content: space-between;
list-style: none;
padding-bottom: 2rem;
li {
  font-size: var(--font-size-xl);
  @media screen and (max-width: 640px) {
  font-size: var(--font-size-l);
 }
}
span {
  font-size: var(--font-size-m);
}
`
export const StyledContact = styled.ul`
flex-basis: 30%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 2rem;
list-style: none;
li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: var(--font-size-m);
  span {
    font-weight: bold;
  }
}
> span {
  font-size: var(--font-size-m);
}
`