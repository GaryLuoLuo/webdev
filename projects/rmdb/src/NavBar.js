
import logo from './images/logo.png'
import './App.scss'
import {useState} from 'react'
import { Logo } from './Logo'

import {UserSummary} from './UserSummary'
import {SignInForm} from './SignInForm'

import './NavBar.scss'

export const NavBar = ({user, setUser}) => {

  // conditional rendering, keep track of user state,
  // if logged in, show user summary
  // if logged out, show sign in form (with sign in button)

  const handleSignIn = (userInfo) => {
    setUser(userInfo)
  }

  const handleSignOut = () => {
    setUser(null)
  }

  return (
    <nav className="NavBar">
      <Logo/>
      {user ? <UserSummary user={user} onSignout={handleSignOut} />
            : <SignInForm onSignIn={handleSignIn} />}
    </nav>

)

}
