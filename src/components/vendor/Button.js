import React from 'react'

function Button({className, type, label}) {
  return (
    <button className={className} type = {type}>
        {label}
    </button >
  )
}

export default Button