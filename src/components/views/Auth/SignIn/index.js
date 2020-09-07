import React, { useState } from 'react'

import Input from '../../../shared/Input';

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
      </form>
    </div>
  )
}

export default SignIn;