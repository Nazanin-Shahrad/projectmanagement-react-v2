import {useState , useEffect , useReducer} from 'react';
import { projectFirestore ,timestamp } from '../firebase/config';

const initialState = {
    document : null ,
    isPending : false,
    error : null,
    success:null
}

const firestoreReducer =(state , action) => {
    switch(action.type){
        case 'ISPENDING':
        return {isPending:true , document:null , success:false , error:null}
        case 'ADDED_DOCUMENT':
        return {isPending:false , document:action.payload , error:null , success:true}
        case 'DELETED_DOCUMENT':
        return {isPending : false , document:action.payload , error:null , success:true}
        case 'ERROR':
        return {isPending:false , document:null , error : action.payload , success:false}
            
        default : 
        return state;
    }
}

export const useFirestore = (collection) => {
    const [state , dispatch] = useReducer(firestoreReducer , initialState);
    const [isCancelled , setIsCancelled] = useState(false);

    //collection ref
    const ref = projectFirestore.collection(collection);


    //add document 
    const addDocument = async (doc) => {
        dispatch({type : 'ISPENDING'})
        try{
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({...doc , createdAt : createdAt});
            if(!isCancelled){
                dispatch({type : 'ADDED_DOCUMENT' , payload : addedDocument})
            }
        }
        catch(err){
            if(!isCancelled){
                dispatch({type : 'ERROR' , payload:err.message})
            }
        }
    }

    //delete document 
    const deleteDocument = async (id) => {
        dispatch({type : 'ISPENDING'});
        try {
            const deletedDocument = await ref.doc(id).delete();
            if(!isCancelled){
                dispatch({type:'DELETED_DOCUMENT' , payload:deletedDocument})
            }

        }
        catch(err){
            if(!isCancelled){
                dispatch({type:'ERROR' , payload:"Could not delete"})
            }

        }

    }

    useEffect(() => {
        // setIsCancelled(false);
        return () => setIsCancelled(true);
    } ,[]);


    return {addDocument , deleteDocument , state}

}