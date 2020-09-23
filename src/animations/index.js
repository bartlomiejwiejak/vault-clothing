import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import isMobile from '../functions/isMobile';

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.598,0.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

export const homeEnter = () => {
  tl.to('#overlay', 1, { ease: 'custom', y: '100%' })
    .from('#content', 1, { scale: '1.6', delay: -1 })
    .from('#scroll-item', .5, { delay: -.3, y: '100%', scale: .5 })
    .to('#directory i', 1, { bottom: 0 })
}
export const leave = (complete) => {
  tl.to('#overlay', 1, { ease: 'custom', y: 0, onComplete: complete })
}

export const shopEnter = () => {
  tl.to('#overlay', 1, { ease: 'custom', y: '100%' })
    .to('#preview:first-child .text', 1, { y: 0, delay: -.5 })
    .to('#preview:first-child .line', 1.5, { width: '100%', delay: -.7 })
    .to('#preview:first-child #collection-item .container', 1, { y: 0, scale: 1, delay: -1.5, stagger: 0.15 })
    .to('#preview:first-child .button-container #button-arrow', 1, { y: 0, delay: -.7 })
    .to('#basket', .7, { scale: 1 })

  let startAnimation = 'bottom bottom';

  if (isMobile()) {
    startAnimation = 'center bottom';
  }

  const items = document.querySelectorAll('#preview:not(:first-child)')
  for (let item of items) {
    gsap.to(item.querySelector('.text'), 1, {
      y: 0, ease: 'power2.out', scrollTrigger: {
        trigger: item,
        start: startAnimation
      }
    })
    gsap.to(item.querySelector('.line'), 1.5, {
      width: '100%', ease: 'power2.out', delay: .3, scrollTrigger: {
        trigger: item,
        start: startAnimation
      }
    })
    gsap.to(item.querySelectorAll('#collection-item .container'), 1, {
      scale: 1, y: 0, ease: 'power2.out', stagger: 0.15, delay: .3, scrollTrigger: {
        trigger: item,
        start: startAnimation
      }
    })
    gsap.to(item.querySelector('.button-container #button-arrow'), 1, {
      y: 0, ease: 'power2.out', delay: .7, scrollTrigger: {
        trigger: item,
        start: startAnimation
      }
    })
  }
  gsap.to('#go-to .container', 1, {
    y: 0, ease: 'power2.out', scrollTrigger: {
      trigger: '#go-to',
      start: startAnimation
    }
  })
}

export const checkoutEnter = () => {
  tl.to('#overlay', 1, { ease: 'custom', y: '100%' })
    .from('#content', 1, { scale: '1.1', delay: -1 })
}

export const authEnter = () => {
  tl.to('#overlay', 1, { ease: 'custom', y: '100%' })
}