import React from 'react'
import { connect } from 'react-redux';

import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import { signUpStart } from '../../../../redux/user/actions';
import { StyledSignUp, StyledTitle } from './styles';
import useForm from '../../../../hooks/useForm';
import { validateMinLength, validateEmail } from '../../../../functions/validators';

const SignUp = ({ signUpStart }) => {
  const { formState, handleChange, handleTouch } = useForm({
    inputs: {
      displayName: {
        value: '',
        validator: validateMinLength(3),
        isValid: false,
        isTouched: false
      },
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
      },
      confirmPassword: {
        value: '',
        validator: validateMinLength(6),
        isValid: false,
        isTouched: false
      }
    }
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const { displayName, email, password } = formState.inputs;

    signUpStart(displayName.value, email.value, password.value)
  }
  function inputChange(e) {
    const { name, value } = e.target;

    handleChange(name, value);
  }
  const { displayName, email, password, confirmPassword } = formState.inputs;
  return (
    <StyledSignUp>
      <StyledTitle>I do not have a account</StyledTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <Input
          type='text'
          name='displayName'
          value={displayName.value}
          onChange={inputChange}
          isValid={displayName.isValid}
          isTouched={displayName.isTouched}
          errorMessage='Name should have at least 3 characters.'
          onBlur={() => handleTouch('displayName')}
          label='Display Name'
          required
        />
        <Input
          type='email'
          name='email'
          value={email.value}
          errorMessage='Please provide a valid email address.'
          onChange={inputChange}
          isValid={email.isValid}
          isTouched={email.isTouched}
          onBlur={() => handleTouch('email')}
          label='Email'
          required
        />
        <Input
          type='password'
          name='password'
          value={password.value}
          errorMessage='Password should have at least 6 characters.'
          onChange={inputChange}
          isValid={password.isValid}
          isTouched={password.isTouched}
          onBlur={() => handleTouch('password')}
          label='Password'
          required
        />
        <Input
          type='password'
          name='confirmPassword'
          value={confirmPassword.value}
          errorMessage='Passwords don`t match!'
          onChange={inputChange}
          isValid={confirmPassword.value === password.value}
          isTouched={confirmPassword.isTouched}
          onBlur={() => handleTouch('confirmPassword')}
          label='Confirm Password'
          required
        />
        <Button type='submit' disabled={!formState.isFormValid || confirmPassword.value !== password.value}>SIGN UP</Button>
      </form>
    </StyledSignUp>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})

export default connect(null, mapDispatchToProps)(SignUp);