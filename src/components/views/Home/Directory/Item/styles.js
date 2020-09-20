import styled from 'styled-components';

export const StyledItem = styled.div`
width: 33.333vw;
position: relative;
flex-shrink: 0;
overflow: hidden;
cursor: pointer;
transition: .3s ease-out;
@media screen and (max-width: 1024px) {
  width: 50vw;
 }
 @media screen and (max-width: 640px) {
  width: 100vw;
 }
:hover img {
filter: brightness(0.4);
transform: scale(1.03) translate(-50%,-50%);
} 
img {
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  transition: .5s ease-out;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 1rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  opacity: 0.8;
  transform: translate(-50%,-50%);
  font-size: var(--font-size-l);
  font-weight: bold;
  text-align: center;
  color: var(--color-grey);
}
`