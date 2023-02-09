import {useState ,useContext, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { AuthContext } from '../context/AuthContextProvider';


export const useLogin =() => {
    const {dispatch  } =useContext(AuthContext);
    const [isCancelled , setIsCancelled] = useState(false)
    const [error , setError] = useState(null);
    const [isPending , setIsPending] = useState(false);
   

    const login = async (email , password ) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await projectAuth.signInWithEmailAndPassword(email , password);
            console.log(res.user);

            if(!res){
                throw new Error("Could not get any response");
            }

          dispatch({type : 'LOGIN' , payload:res.user})
         
            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }

        }
        catch(err){
            if(!isCancelled){
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
         
        }

    }

    useEffect(() => {
        setIsCancelled(false)
       return () => {
        setIsCancelled(true)
       }
       } ,[])
      
   


    return {error , isPending , login}

}