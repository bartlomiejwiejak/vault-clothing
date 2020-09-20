import { useRef, useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';

const useScroller = (elementsVisibleNumber) => {
  const containerRef = useRef(null);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const isAnimating = useRef(false);
  const [elements, setElements] = useState([]);

  const setContainer = useCallback(function (node) {
    containerRef.current = node;
    setElements(containerRef.current.querySelectorAll('#scroll-item'));
  }, [])

  const scroll = useCallback(function (direction) {
    if (isAnimating.current || containerRef.current === null) return;
    if (direction === 'right') {
      if (currentScrollIndex === elements.length - elementsVisibleNumber) return;
      isAnimating.current = true;
      setCurrentScrollIndex(prev => prev + 1)
      let value = 0;
      for (let i = 0; i < currentScrollIndex + 1; i++) {
        value = value + elements[i].offsetWidth;
      }
      gsap.to(elements, .7, { ease: 'power.2out', x: -value, onComplete: () => { isAnimating.current = false } });
    } else if (direction === 'left') {
      if (currentScrollIndex === 0) return;
      isAnimating.current = true;
      setCurrentScrollIndex(prev => prev - 1)
      let value = 0;
      for (let i = 0; i < currentScrollIndex - 1; i++) {
        value = value + elements[i].offsetWidth;
      }
      gsap.to(elements, .7, { ease: 'power.2out', x: -value, onComplete: () => { isAnimating.current = false } });
    }
  }, [currentScrollIndex, elements, elementsVisibleNumber])

  useEffect(() => {
    const listener = window.addEventListener('resize', () => {
      let value = 0;
      isAnimating.current = true;
      for (let i = 0; i < currentScrollIndex; i++) {
        value = value + elements[i].offsetWidth;
      }
      gsap.to(elements, .2, { ease: 'power.2out', x: -value, onComplete: () => { isAnimating.current = false } });
    })
    return () => {
      window.removeEventListener('resize', listener);
    }
  }, [currentScrollIndex, elements])

  return { scroll, setContainer, currentScrollIndex, endIndex: elements.length - elementsVisibleNumber };
}

export default useScroller;