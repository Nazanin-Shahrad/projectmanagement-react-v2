import React ,{createContext,useEffect,useReducer}from 'react';
import {projectAuth} from '../firebase/config';

export const AuthContext = createContext();

const initialState = {
    user : null,
    authIsReady : false,
    name:'',
}

const authReducer = (state , action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state , user : action.payload}
        case 'LOGOUT':
            return {...state , user : null}
        case 'AUTHISREADY':
            return { user : action.payload , authIsReady:true , name:'nazanin'}
        default : 
        return state;
    };
  
   
}

const AuthContextProvider = ({children}) => {
    const [state , dispatch] =useReducer(authReducer , initialState);
    console.log("AuthContextProvider" , state)

    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged((user) => {
            dispatch({type : 'AUTHISREADY' , payload:user})
            unsub();
        });
       
        console.log("ejra shod")
        console.log(state)
    },[])

  return (
   <AuthContext.Provider value ={{...state , dispatch}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider