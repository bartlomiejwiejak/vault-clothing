import React, { useState } from 'react'
import { connect } from 'react-redux';

import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import { googleSignInStart, emailSignInStart } from '../../../../redux/user/actions';
import {
  StyledSignIn,
  StyledTitle,
  StyledButtonsBar
} from './styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formState;

  async function handleSubmit(e) {
    e.preventDefault()
    emailSignInStart(email, password)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <StyledSignIn>
      <StyledTitle>I already have an account</StyledTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <Input
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <StyledButtonsBar>
          <Button type='submit'> Sign in </Button>
          <Button
            type='button'
            onClick={googleSignInStart}
            isGoogle
          >
            Sign in with Google
          </Button>
        </StyledButtonsBar>
      </form>
    </StyledSignIn>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);