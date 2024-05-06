import React from 'react'

const Button = ({className, children}) => {
  return (
    <article className={`button ${className}`}>{children}</article>
  )
}

export default Button;