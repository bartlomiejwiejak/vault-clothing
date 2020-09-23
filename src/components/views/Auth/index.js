import React from 'react'

import SignIn from './SignIn';
import SignUp from './SignUp';
import useAnimation from '../../../hooks/useAnimation';
import { StyledAuth } from './styles';

const Auth = () => {

  useAnimation('AUTH');

  return (
    <StyledAuth>
      <SignIn />
      <SignUp />
    </StyledAuth>
  )
}

export default Auth;