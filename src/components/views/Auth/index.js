import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';
import useAnimation from '../../../hooks/useAnimation';
import { StyledAuth } from './styles';
import { setAnimating, setPath } from '../../../redux/routing/actions';

const Auth = () => {

  useAnimation('AUTH');

  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(setAnimating(true));
      dispatch(setPath('/'));
    }
  }, [currentUser, dispatch])

  return (
    <StyledAuth>
      <SignIn />
      <SignUp />
    </StyledAuth>
  )
}

export default Auth;