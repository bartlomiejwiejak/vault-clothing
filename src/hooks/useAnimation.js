import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setInitialized } from '../redux/routing/actions';
import showHeader from '../animations/showHeader';
import { homeEnter, leave, shopEnter } from '../animations';

const useAnimation = (component) => {
  const isLoadedRef = useRef(false);

  const dispatch = useDispatch();
  const initialized = useSelector(state => state.routing.initialized);
  const animating = useSelector(state => state.routing.animating);
  const path = useSelector(state => state.routing.path);

  const history = useHistory()

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
        case 'SHOP':
          shopEnter();
          break;
        default:
          return;
      }
    }, delay)
  }, [component, initialized, dispatch])

  useEffect(() => {
    if (animating) {
      leave(() => history.push(path));
    }
  }, [animating, history, path])
}

export default useAnimation;