import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInitialized } from '../redux/routing/actions';
import showHeader from '../animations/showHeader';
import { homeEnter } from '../animations/home';

const useAnimation = (component) => {
  const isLoadedRef = useRef(false);

  const dispatch = useDispatch();
  const initialized = useSelector(state => state.routing.initialized)

  useEffect(() => {
    if (isLoadedRef.current) return;
    let delay = 0;
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
        default:
          return;
      }
    }, delay)
  }, [component, initialized, dispatch])
}

export default useAnimation;