import  Avatar  from '../../components/Avatar/Avatar'
import React, { useState ,useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { timestamp } from '../../firebase/config';
import { useFirestore } from '../../hooks/useFirestore';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ProjectComments = ({project}) => {
    const [newComment , setNewComment] =useState('')
    const {user} = useContext(AuthContext);
    const {updateDocument , state} = useFirestore('projects');

    console.log("user in projectComments:",user)

     

    const handleSubmit = async (e) => {
        e.preventDefault();

        const commnetToAdd = {
            diplayName: user.displayName,
            photoURL : user.photoURL,
            content: newComment,
            createdAt : timestamp.fromDate(new Date()),
            id: Math.random()
        }

        console.log(commnetToAdd);
        console.log("project in project Comment is : " , project)

        await updateDocument(project.id , {
            comments : [...project.comments , commnetToAdd]
        })

        if(!state.error){
            setNewComment('');
        }



    }

  return (
    <div className='project-comments'>
        <h4>Project Comments</h4>
        <ul>
            {project.comments.length > 0 &&  project.comments.map(comment => (
                <li key={comment.id}>
                    <div className='comment-author'>
                        <Avatar src={comment.photoURL} />
                        <p>{comment.displayName}</p>
                    </div>
                    <div className='comment-date'>
                        <p>{formatDistanceToNow(comment.createdAt.toDate() , {addSuffix : true})}</p>
                    </div>
                    <div className='comment-content'>
                        <p>{comment.content}</p>

                    </div>
                </li>

            ))}
        </ul>

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