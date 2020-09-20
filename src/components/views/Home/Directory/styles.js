import styled from 'styled-components';

export const StyledDirectory = styled.div`
height: 100%;
display: inline-flex;
i {
  font-size: var(--font-size-xxl);
  color: var(--color-white);
  position: fixed;
  bottom: 0;
  cursor: pointer;
  z-index: 3;
}
i.disabled {
  color: var(--color-grey);
  opacity: 0.6;
}
.arrow-left {
  left: 0;
  transform: translate(100%, -100%);
}
.arrow-right {
  right: 0;
  transform: translate(-100%, -100%);
}
`