import React ,{useState ,useContext, useEffect}from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { AuthContext } from '../context/AuthContextProvider';

export const useLogout = () => {
    const [error , setError] = useState(null);
    const [isPending , setIsPending] =useState(false)
    const [isCancelled , setIsCancelled] =useState(false);
    const {dispatch , user  } =useContext(AuthContext);

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try{
            const {uid} = user;
            await projectFirestore.collection('users').doc(uid).update({online : false});

            await projectAuth.signOut();
            dispatch({type:'LOGOUT'})

            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }

        }
        catch(err){
            if(!isCancelled){
                setError(err.message);
                setIsPending(false);
            }


        }
    }

    useEffect(() =>{
        setIsCancelled(false)

        return () => {
            setIsCancelled(true)
        }
    },[])

    return {logout , error , isPending}

  
}

