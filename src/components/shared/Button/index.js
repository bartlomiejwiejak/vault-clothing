import React from 'react'

import './styles.scss';

const Button = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button className={`button ${isGoogle ? 'is-google' : ''}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button;