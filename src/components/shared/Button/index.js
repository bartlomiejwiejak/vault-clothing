import React from 'react'

import './styles.scss';

const Button = ({ children, isGoogle, inverted, ...otherProps }) => {
  return (
    <button className={`button ${inverted ? 'inverted' : ''} ${isGoogle ? 'is-google' : ''}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button;