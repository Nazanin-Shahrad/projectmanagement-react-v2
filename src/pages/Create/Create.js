import React, { useEffect, useState  , useContext} from 'react';
import './create.css';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';
import {timestamp} from '../../firebase/config';
import { AuthContext } from '../../context/AuthContextProvider';
import {useFirestore} from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

const categories=[
    {value : "development" , label : "development"},
    {value : "design" , label : "design"},
    {value : "sales" , label : "sales"},
    {value : "productline" , label : "productline"},
    {value : "marketing" , label : "marketing"},
]

const Create = () => {
    const {documents} = useCollection('users');
    const [users , setUsers] = useState([]);

    const {addDocument , state} = useFirestore('projects');
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);


    const [name , setName ] = useState('')
    const [details , setDetails ] = useState('')
    const [dueDate , setDueDate ] = useState('')
    const [category , setCategory ] = useState('')
    const [assignedUsers , setAssignedUsers ] = useState([])

    useEffect(() => {
        if(documents){
            const options = documents.map((user) => {
                return {value : user , label : user.displayName}
            })
            setUsers(options)
        }
    } , [documents]);

    const createdBy ={
        displayName : user.displayName,
        photoURL : user.photoURL,
        id : user.uid
    }

    const assignedUsersList = assignedUsers.map((u) => {
        return {
            displayName: u.value.displayName,
            photoURL:u.value.photoURL,
            id:u.value.id
        }
    })

    const project = {
        name , 
        details ,
        dueDate: timestamp.fromDate(new Date(dueDate)),
        category : category.value,
        comments: [],
        createdBy ,
        assignedUsersList
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name , details , dueDate, category , assignedUsers);
        console.log(project)

        await addDocument(project);
        if(!state.error){
            navigate('/');
        }
    }


  return (
    <div className='create-form'>
        <h2 className='page-titme'>Create a new project</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Project name :</span>
                <input type='text' required onChange={(e) => setName(e.target.value)} value={name} />
            </label>
            <label>
                <span>Project details :</span>
                <textarea type='text' required onChange={(e) => setDetails(e.target.value)} value={details} ></textarea>
            </label>
            <label>
                <span>Project due date :</span>
                <input type='date' required onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
            </label>
            <label>
                <span>Project category :</span>
                <Select options={categories} onChange={(option) => setCategory(option)} />
               
            </label>
            <label>
                <span>Assign to :</span>
                <Select  options={users} onChange={(option) => setAssignedUsers(option)} isMulti/>
                
            </label>
            <button className='btn'>Create</button>
        </form>

    </div>
  )
}

export default Create