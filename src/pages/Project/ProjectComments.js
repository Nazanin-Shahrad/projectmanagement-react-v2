import React, { useState ,useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { timestamp } from '../../firebase/config';

const ProjectComments = () => {
    const [newComment , setNewComment] =useState('')
    const {user} = useContext(AuthContext);

    console.log("user in projectComments:",user)

     

    const handleSubmit = (e) => {
        e.preventDefault();

        const commnetToAdd = {
            diplayName: user.displayName,
            photoURL : user.photoURL,
            content: newComment,
            createdAt : timestamp.fromDate(new Date()),
            id: Math.random()
        }

        console.log(commnetToAdd);

    }

  return (
    <div className='project-comments'>
        <h4>Project Comments</h4>

        <form className='add-comment' onSubmit={handleSubmit}>
            <label>
                <span>Add new comment :</span>
                <textarea onChange={(e) => setNewComment(e.target.value)} value={newComment}>

                </textarea>
            </label>
            <button className='btn' style={{width:"200px"}}>Add Comment</button>
        </form>
    </div>
  )
}

export default ProjectComments