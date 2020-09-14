import React, { useState } from 'react'
import { connect } from 'react-redux';

import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import './styles.scss';
import { signUpStart } from '../../../../redux/user/actions';

const SignUp = ({ signUpStart }) => {
  const [formState, setFormState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = formState;
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return;
    }
    signUpStart(displayName, email, password)
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
  const { displayName, email, password, confirmPassword } = formState;
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <Input type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
        <Input type='email' name='email' value={email} onChange={handleChange} label='Email' required />
        <Input type='password' name='password' value={password} onChange={handleChange} label='Password' required />
        <Input type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})

export default connect(null, mapDispatchToProps)(SignUp);