import gsap from 'gsap';

export default () => {
  gsap.to('#logo span span', 1, { y: 0, ease: 'power2.out' });
  gsap.to('#burger div', 1, { width: '3rem', ease: 'power2.out' });
}