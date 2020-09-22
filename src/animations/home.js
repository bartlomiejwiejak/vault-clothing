import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.598,0.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1')

export const homeEnter = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  tl.to('#overlay', 1, { ease: 'custom', y: '100%' })
    .from('#content', 1, { ease: 'power2.out', scale: '1.6', delay: -1 })
    .from('#scroll-item', .5, { ease: 'power2.out', delay: -.5, y: '100%', scale: .5 })
    .to('#directory i', 1, { bottom: 0, ease: 'power2.out', delay: .2 })
}