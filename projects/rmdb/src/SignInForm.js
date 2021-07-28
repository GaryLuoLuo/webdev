import {useState} from 'react'

export const SignInForm = ({onSignIn}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // keep track of the signin form showing
  const [showSignIn, setShowSignIn] = useState(false)

  const [validation, setValidation] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'password') {
      const userInfo = {username : 'admin', password : 'password'}
      onSignIn(userInfo)

      setValidation(true)
    } else {
      setValidation(false)
    }

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
             onChange={(e) => {setUsername(e.target.value)}}
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
