"use client"

import React from 'react'
import { signIn } from 'next-auth/react'

const LandingPage = () => {
  return (
      <button onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/dashboard' })}>Sign in with Google</button>
  )
}

export default LandingPage