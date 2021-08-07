import {useState} from 'react'

export const useUser = () => {

  const [user, setUser] = useState(null)

  const signIn = (userInfo) => {

    const {username, password} = userInfo
    if (username === 'admin' && password === 'password') {
      setUser(userInfo)
      return true
    } else {
      return false;
    }

  }

  const signOut = () => {
    setUser(null)
  }

  return {user, signIn, signOut}
}
