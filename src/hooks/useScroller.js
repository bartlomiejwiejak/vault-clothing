import { useRef, useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';

const useScroller = (elementsVisibleNumber = 0) => {
  const containerRef = useRef(null);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const isAnimating = useRef(false);
  const [elements, setElements] = useState([]);
  const [elementsVisibleNumberState, setElementsVisibleNumberState] = useState(elementsVisibleNumber);
  const [endIndex, setEndIndex] = useState(0);
  const scrollRef = useRef(null);

  const setContainer = useCallback(function (node) {
    containerRef.current = node;
    const elements = containerRef.current.querySelectorAll('#scroll-item')
    setElements(elements);
  }, [])

  const scroll = useCallback(function (direction) {
    if (isAnimating.current || containerRef.current === null) return;
    if (direction === 'right') {
      if (currentScrollIndex === endIndex) return;
      console.log('right')
      isAnimating.current = true;
      setCurrentScrollIndex(prev => prev + 1)
      let value = 0;
      for (let i = 0; i < currentScrollIndex + 1; i++) {
        value = value + elements[i].offsetWidth;
      }
      gsap.to(elements, .5, { ease: 'power.2out', x: -value, onComplete: () => { isAnimating.current = false; } });
    } else if (direction === 'left') {
      if (currentScrollIndex === 0) return;
      isAnimating.current = true;
      setCurrentScrollIndex(prev => prev - 1)
      let value = 0;
      for (let i = 0; i < currentScrollIndex - 1; i++) {
        value = value + elements[i].offsetWidth;
      }
      gsap.to(elements, .5, { ease: 'power.2out', x: -value, onComplete: () => { isAnimating.current = false; } });
    }
  }, [currentScrollIndex, elements, endIndex])

  useEffect(() => {
    setEndIndex(elements.length - elementsVisibleNumberState);
    scrollRef.current = scroll;
  }, [elementsVisibleNumberState, elements.length, scroll])

  useEffect(() => {
    let timeout = null;
    const listener = window.addEventListener('resize', () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        let endIndex = elements.length - elementsVisibleNumber;
        setElementsVisibleNumberState(elementsVisibleNumber);
        if (window.innerWidth <= 1024) {
          setElementsVisibleNumberState(elementsVisibleNumber - 1);
          endIndex = elements.length - elementsVisibleNumber + 1;
        }
        if (window.innerWidth <= 640) {
          setElementsVisibleNumberState(elementsVisibleNumber - 2);
          endIndex = elements.length - elementsVisibleNumber + 2;
        }
        let value = 0;
        isAnimating.current = true;
        let scrollIndex = currentScrollIndex;
        if (endIndex < currentScrollIndex) {
          setCurrentScrollIndex(0);
          scrollIndex = 0;
        }
        for (let i = 0; i < scrollIndex; i++) {
          value = value + elements[i].offsetWidth;
        }
        gsap.to(elements, .1, { ease: 'power.2out', x: -value, onComplete: () => { isAnimating.current = false } });
      }, 300)
    })
    return () => {
      window.removeEventListener('resize', listener);
    }
  }, [currentScrollIndex, elements, elementsVisibleNumber])

  useEffect(() => {
    const listenWheel = window.addEventListener('wheel', (e) => {
      let direction;
      if (e.wheelDelta < 0) {
        direction = 'right';
      } else {
        direction = 'left';
      }
      scrollRef.current(direction);
    })
    let touchStart = 0;
    let touchEnd = 0;
    const listenTouchStart = window.addEventListener('touchstart', (e) => {
      touchStart = e.targetTouches[0].clientX;
    })
    const listenTouchMove = window.addEventListener('touchmove', (e) => {
      touchEnd = e.targetTouches[0].clientX;
      if (touchEnd - touchStart > 50) {
        scrollRef.current('left')
      }
      if (touchEnd - touchStart < -50) {
        scrollRef.current('right')
      }
    })
    return () => {
      window.removeEventListener('wheel', listenWheel)
      window.removeEventListener('touchstart', listenTouchStart)
      window.removeEventListener('touchmove', listenTouchMove)
    }
  }, [scroll])

  return { scroll, setContainer, currentScrollIndex, endIndex: endIndex };
}

export default useScroller;