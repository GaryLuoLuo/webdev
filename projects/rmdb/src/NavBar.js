
import { Logo } from './Logo'

import {UserSummary} from './UserSummary'
import {SignInForm} from './SignInForm'

import {Route, Link} from 'react-router-dom'

import './NavBar.scss'

export const NavBar = ({userState}) => {

  // conditional rendering, keep track of user state,
  // if logged in, show user summary
  // if logged out, show sign in form (with sign in button)

  const {user, signIn, signOut} = userState
  return (
    <nav className="NavBar">
      <div className="logo-section">
        <Route path="/movies/:imdbID">
          <Link to="/">
            <button>&lt;</button>
          </Link>
        </Route>
        <Logo/>
      </div>
      {user ? <UserSummary user={user} signOut={signOut} />
            : <SignInForm signIn={signIn} />}
    </nav>

)

}
