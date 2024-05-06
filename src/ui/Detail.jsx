import React from 'react'

const Detail = ({className, children}) => {
  return (
    <article className={`detail ${className}`}>{children}</article>
  )
}

export default Detail