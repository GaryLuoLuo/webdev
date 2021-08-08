import {useState, useContext} from 'react'
import {AuthContext} from './contexts/auth'

export const SignInForm = () => {

  const {signIn} = useContext(AuthContext)
  // keep track of the signin form showing
  const [showSignIn, setShowSignIn] = useState(false)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [validation, setValidation] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    signIn({username, password}) ? setValidation(true) : setValidation(false)

    setUsername('')
    setPassword('')
  }

  return (
    <div className="sign-in">
      <button type="button" onClick={() => {setShowSignIn(!showSignIn)}}>Sign In</button>

      {
        showSignIn &&
        // (<form onSubmit={e => handleSubmit(e)}>
        (<form onSubmit={handleSubmit}>

          <div className="close-btn">

            <button type="button" onClick={() => setShowSignIn(false)} >x</button>
          </div>


          <label htmlFor="username">Username</label>
          <input
             id="username"
             type="text"
             value={username}
             onChange={e => setUsername(e.target.value)}
           />

           <label htmlFor="password">Password</label>
           <input
             id="password"
             type="text"
             value={password}
             onChange={e => setPassword(e.target.value)}
           />

           <button type="submit" >Submit</button>

           {validation ? null : <p>Invalid username/password</p> }
        </form>)
      }
    </div>
  )
}
