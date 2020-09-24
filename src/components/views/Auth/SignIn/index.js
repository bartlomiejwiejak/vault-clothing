import React from 'react'
import { connect } from 'react-redux';

import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import { googleSignInStart, emailSignInStart } from '../../../../redux/user/actions';
import {
  StyledSignIn,
  StyledTitle,
  StyledButtonsBar
} from './styles';
import useForm from '../../../../hooks/useForm';
import { validateMinLength, validateEmail } from '../../../../functions/validators';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const { formState, handleChange, handleTouch } = useForm({
    inputs: {
      email: {
        value: '',
        validator: validateEmail,
        isValid: false,
        isTouched: false
      },
      password: {
        value: '',
        validator: validateMinLength(6),
        isValid: false,
        isTouched: false
      }
    },
    isFormValid: false
  })


  async function handleSubmit(e) {
    e.preventDefault()
    emailSignInStart(formState.inputs.email.value, formState.inputs.password.value)
  }

  function inputChange(e) {
    const { value, name } = e.target;

    handleChange(name, value)
  }

  return (
    <StyledSignIn>
      <StyledTitle>I already have an account</StyledTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          name='email'
          type='email'
          onBlur={() => handleTouch('email')}
          handleChange={inputChange}
          value={formState.inputs.email.value}
          label='email'
          isValid={formState.inputs.email.isValid}
          isTouched={formState.inputs.email.isTouched}
          errorMessage='Please, provide a valid email address.'
          required
        />
        <Input
          name='password'
          type='password'
          onBlur={() => handleTouch('password')}
          value={formState.inputs.password.value}
          handleChange={inputChange}
          label='password'
          isValid={formState.inputs.password.isValid}
          isTouched={formState.inputs.password.isTouched}
          errorMessage='Password should have at least 6 characters.'
          required
        />
        <StyledButtonsBar>
          <Button type='submit' disabled={!formState.isFormValid}> Sign in </Button>
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