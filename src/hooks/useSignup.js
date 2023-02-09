import { useState, useEffect, useContext } from 'react'
import { projectAuth } from '../firebase/config'
import { AuthContext } from '../context/AuthContextProvider'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useContext(AuthContext)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add display name to user
      await res.user.updateProfile({ displayName })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      console.log("isCancelled : " ,isCancelled)
      console.log("isCancelled : " , !isCancelled)

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

 useEffect(() => {
  setIsCancelled(false)
 return () => {
  setIsCancelled(true)
 }
 } ,[])

  return { signup, error, isPending }
}