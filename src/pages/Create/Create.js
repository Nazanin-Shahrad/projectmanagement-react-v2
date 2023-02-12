import React, { useState } from 'react';
import './create.css'

const Create = () => {
    const [name , setName ] = useState('')
    const [details , setDetails ] = useState('')
    const [dueDate , setDueDate ] = useState('')
    const [category , setCategory ] = useState('')
    const [assignedUsers , setAssignedUsers ] = useState([])

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(name , details , dueDate);
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
               
            </label>
            <label>
                <span>Assign to :</span>
                
            </label>
            <button >Create</button>
        </form>

    </div>
  )
}

export default Create