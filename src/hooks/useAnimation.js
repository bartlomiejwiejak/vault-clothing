import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';

import { setInitialized, setAnimating } from '../redux/routing/actions';
import showHeader from '../animations/showHeader';
import { homeEnter, leave, shopEnter, checkoutEnter, authEnter } from '../animations';

const useAnimation = (component) => {
  const isLoadedRef = useRef(false);

  const dispatch = useDispatch();
  const initialized = useSelector(state => state.routing.initialized);
  const animating = useSelector(state => state.routing.animating);
  const path = useSelector(state => state.routing.path);

  const history = useHistory()

  useEffect(() => {
    if (isLoadedRef.current) return;
    gsap.set('body', { overflow: 'auto' });
    window.scrollTo(0, 0);
    let delay = 300;
    isLoadedRef.current = true;
    if (!initialized) {
      showHeader();
      dispatch(setInitialized(true));
      delay = 1500;
    }
    setTimeout(() => {
      switch (component) {
        case 'HOME':
          homeEnter();
          break;
        case 'SHOP':
          shopEnter();
          break;
        case 'CHECKOUT':
          checkoutEnter();
          break;
        case 'AUTH':
          authEnter();
          break;
        default:
          return;
      }
    }, delay)
  }, [component, initialized, dispatch])

  useEffect(() => {
    if (animating) {
      gsap.set('body', { overflow: 'hidden' });
      leave(() => {
        dispatch(setAnimating(false));
        history.push(path);
      });
    }
  }, [animating, history, path, dispatch])
}

export default useAnimation;