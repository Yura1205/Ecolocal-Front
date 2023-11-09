import React from 'react'

export const SignInButton = ({fnRegistroUsuario}) => {
  return (
    <button type="button" className="btn btn-outline-success" onClick={fnRegistroUsuario}>Sign In</button>
  )
}
