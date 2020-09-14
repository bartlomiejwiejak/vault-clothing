import React, { useState } from 'react'
import { connect } from 'react-redux';

import Input from '../../../shared/Input';
import './styles.scss';
import Button from '../../../shared/Button';
import { googleSignInStart, emailSignInStart } from '../../../../redux/user/actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(e) {
    const { email, password } = formState;
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
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} type='email' name='email' label='Email' value={formState.email} />
        <Input handleChange={handleChange} type='password' name='password' label='Password' value={formState.password} />
        <div className="buttons">
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={googleSignInStart} isGoogle>Sign In With Google</Button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);