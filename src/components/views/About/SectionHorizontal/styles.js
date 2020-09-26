import styled from 'styled-components';

import img1 from '../../../../assets/about-1.jpg';
import img2 from '../../../../assets/about-2.jpg';
import img3 from '../../../../assets/about-3.jpg';
import img4 from '../../../../assets/about-4.jpg';

export const StyledContainer = styled.div`
width: 300vw;
height: 100%;
height: calc(var(--vh, 1vh)*100);
display: grid;
grid-template-columns: repeat(3, 1fr);
@media only screen and (max-width: 640px) {
  width: 100%;
  height: auto;
  display: block;
}
`
export const StyledSection = styled.section`
position: relative;
z-index: 0;
height: calc(var(--vh, 1vh)*100);
:nth-child(2) {
z-index: 1;
}
:nth-child(3) {
  z-index: 0;
}
.text {
  width: 30%;
  position: absolute;
  font-size: var(--font-size-m);
  font-weight: normal;
  h2 {
    font-size: var(--font-size-xxxl);
    white-space: nowrap;
    @media screen and (max-width: 1024px) {
    font-size: var(--font-size-xxl);
    }
  }
}
.text--1 {
  left: 15%;
  top: 30%;
  @media only screen and (max-width: 640px) {
  left: 2.5%;
  }
  h2 {
    font-size: var(--font-size-m);
  }
  h3 {
    color: var(--color-gold);
    font-size: var(--font-size-l);
    font-weight: normal;
    white-space: nowrap;
    @media only screen and (max-width: 640px) {
    font-size: var(--font-size-m);
    }
  }
  }
  .text--2 {
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  @media only screen and (max-width: 640px) {
     left: 20%;
     top: 50%;  
     transform: translate(0,0);
     width: 70%;
  }
  h2 {
     transform: translate(-70%, -50%);
     @media only screen and (max-width: 1024px) {
      transform: translate(-60%, -40%);
     }
     @media only screen and (max-width: 640px) {
      transform: translate(-20%, -30%);
     }
  }
  }
  .text--3 {
   left: 40%;
   bottom: 5%;
   @media only screen and (max-width: 640px) {
      width: 50%;
      bottom: 12.5%;
   }
   h2 {
    transform: translate(-60%, -50%);
    @media screen and (max-width: 1024px) {
    transform: translate(-50%, -40%);
    }
    @media only screen and (max-width: 640px) {
      transform: translate(-60%, -30%);
      font-size: var(--font-size-xl);
   }
   }
  }
  .image-container {
    position: absolute;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  }
  .image-container-1 {
    height: 80%;
    width: 70%;
    top: 0;
    left: 50%;
    img {
      background-image: url(${img1});
    }
  }
  .image-container-2 {
    height: 40%;
    width: 40%;
    bottom: 0;
    left: 60%;
    @media only screen and (max-width: 640px) {
     left: 0;
     top: 2.5%;  
     width: 50%;
    }
    img {
      background-image: url(${img2});
    }
}
.image-container-3 {
    height: 100%;
    width: 30%;
    bottom: 0;
    left: -10%;
    @media only screen and (max-width: 640px) {
      left: 0;
    }
    img {
      background-image: url(${img3});
    }
}
.image-container-4 {
    height: 45%;
    width: 92%;
    top: 0;
    left: 8%;
    img {
      width: 100%;
      height: 100%;
      background-image: url(${img4});
      background-size: cover;
      background-position: center;
    }
}
.section-name {
  font-size: var(--font-size-xxxxxl);
  position: absolute;
  white-space: nowrap;
  font-weight: bold;
  bottom: 0;
  color: var(--color-grey-light);
  @media only screen and (max-width: 1024px) {
  font-size: var(--font-size-xxxxl);
  }
}
.section-name--1 {
   left: 52%;
  @media only screen and (max-width: 640px) {
   left: 5%;
   bottom: 7.5%;  
  }
}
.section-name--2 {
  left: 5%;
}
`