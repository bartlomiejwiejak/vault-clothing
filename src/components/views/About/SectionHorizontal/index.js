import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { StyledContainer, StyledSection } from './styles';

const SectionHorizontal = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let scrollTriggerEnabled;
    const ids = ['paragraphs', 'headings', 'images-move', 'images-scale']
    let triggers = []
    let mq;

    if (matchMedia) {
      mq = window.matchMedia('(min-width: 641px)');
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    function WidthChange(mq) {
      let shouldEnable = mq.matches;
      if (shouldEnable !== scrollTriggerEnabled) {
        if (triggers.length !== 0) {
          for (let trigger of triggers) {
            gsap.killTweensOf([trigger.scroller, trigger.animation]);
            trigger.kill(true);
          }
          gsap.set('#scroll-container .text > *:not(h2),#scroll-container .text > h2,#scroll-container .image-container, #scroll-container .section-name,#scroll-container .image-container img', { x: 0, scale: 1, overwrite: true });
        }

        if (shouldEnable) {
          gsap.to('#scroll-container .text > *:not(h2)', {
            x: -containerRef.current.offsetWidth * 2 / 3,
            ease: "none",
            scrollTrigger: {
              id: 'paragraphs',
              trigger: containerRef.current,
              pin: true,
              scrub: 2,
              end: () => '+=' + containerRef.current.offsetWidth
            }
          });
          gsap.to('#scroll-container .text > h2', {
            x: -containerRef.current.offsetWidth * 2 / 3,
            ease: "none",
            scrollTrigger: {
              id: 'headings',
              trigger: containerRef.current,
              pin: true,
              scrub: 1.5,
              end: () => '+=' + containerRef.current.offsetWidth
            }
          });
          gsap.to('#scroll-container .image-container, #scroll-container .section-name', {
            x: -containerRef.current.offsetWidth * 2 / 3,
            ease: "none",
            scrollTrigger: {
              id: 'images-move',
              trigger: containerRef.current,
              pin: true,
              scrub: 1,
              end: () => '+=' + containerRef.current.offsetWidth
            }
          });
          gsap.to('#scroll-container .image-container img', {
            scale: 1.6,
            ease: "none",
            scrollTrigger: {
              id: 'images-scale',
              trigger: containerRef.current,
              pin: true,
              scrub: 2,
              end: () => '+=' + containerRef.current.offsetWidth
            }
          });
          triggers = ids.map(id => ScrollTrigger.getById(id))
        }
      }
      scrollTriggerEnabled = shouldEnable;
    }

    return () => {
      mq.removeListener(WidthChange);
      if (!triggers.lenght === 0) return;
      for (let trigger of triggers) {
        gsap.killTweensOf([trigger.scroller, trigger.animation]);
        trigger.kill(true);
      }
    }
  }, [])

  return (
    <StyledContainer id='scroll-container' ref={containerRef}>
      <StyledSection>
        <div className='text text--1'>
          <h2>Vault Clothing</h2>
          <h3>A higher form of shopping</h3>
          <h3>Partners in eye care</h3>
        </div>
        <div className='image-container image-container-1'>
          <img alt='' />
        </div>
        <span className='section-name section-name--1'>01 / Foundation</span>
      </StyledSection>
      <StyledSection>
        <div className='image-container image-container-2'>
          <img alt='' />
        </div>
        <div className='text text--2'>
          <h2>Shopping with Style</h2>
          <p>
            We aim to offer our customers a variety of the latest fashion cases. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.
        </p>
        </div>
      </StyledSection>
      <StyledSection>
        <div className='image-container image-container-4'>
          <img alt='' />
        </div>
        <div className='image-container image-container-3'>
          <img alt='' />
        </div>
        <span className='section-name section-name--2'>02 / Mission</span>
        <div className='text text--3'>
          <h2>Experience the Difference</h2>
          <p>
            If you’re looking for something new, you’re in the right place. We strive to be industrious and innovative, offering our customers something they want, putting their desires at the top of our priority list.
        </p>
        </div>
      </StyledSection>
    </StyledContainer>
  )
}

export default SectionHorizontal;

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     id: 'horizontal-scroll',
//     trigger: containerRef.current,
//     pin: true,
//     scrub: 1,
//     end: () => '+=' + containerRef.current.offsetWidth
//   }
// });