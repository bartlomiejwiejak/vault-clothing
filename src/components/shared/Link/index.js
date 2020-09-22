import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setAnimating, setPath } from '../../../redux/routing/actions';

const Link = ({ children, to, styles }) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const animating = useSelector(state => state.routing.animating)

  function startRedirecting() {
    if (animating || location.pathname === to) return;
    dispatch(setPath(to));
    dispatch(setAnimating(true));
  }

  let style = { display: 'inline-block', position: 'relative', zIndex: 1 }
  if (styles) {
    style = { ...style, ...styles };
  }

  return (
    <div className='link' onClick={startRedirecting} style={style}>
      {children}
    </div>
  );
}

export default Link;