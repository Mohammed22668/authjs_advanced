import React from 'react'
import CardWrapper from './CardWrapper'

const LoginForm = () => {
  return (
    <CardWrapper
    headerLabel='welcome back'
    backButtonLabel="Don't have an account"
    backButtonHref='/auth/register'
    showSocial
    >
        Login Page
    </CardWrapper>
  )
}

export default LoginForm