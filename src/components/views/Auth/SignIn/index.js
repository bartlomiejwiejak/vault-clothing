import React, { useState } from 'react'

import Input from '../../../shared/Input';
import './styles.scss';
import Button from '../../../shared/Button';
import { signInWithGoogle } from '../../../../firebase/firebaseUtils';

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    setFormState({
      email: '',
      password: ''
    })
  }

  function handleChange(e) {
    const { value, name } = e.target
  }
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} label='email' />
        <Input handleChange={handleChange} label='password' />
        <Button type='submit'>Sign In</Button>
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      </form>
    </div>
  )
}

export default SignIn;