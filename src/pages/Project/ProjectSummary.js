import Avatar from "../../components/Avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
import './project.css';
import { useNavigate } from "react-router-dom";


export const ProjectSummary = ({project}) => {
    const { deleteDocument } = useFirestore('projects')
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
  
    const handleClick = () => {
      deleteDocument(project.id)
      navigate('/');
    }
  
    return (
      <div>
        <div className="project-summary">
          <h2 className="page-title">{project.name}</h2>
          <p className="due-date">
            Project due by {project.dueDate.toDate().toDateString()}
          </p>
          <p className="details">
            {project.details}
          </p>
          <h4>Project assigned to:</h4>
          <div className="assigned-users">
            {project.assignedUsersList.map(user => (
              <div key={user.id}>
                <Avatar src={user.photoURL} />
              </div>
            ))}
          </div>
        </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>Mark as Complete</button>
        )}
      </div>
    )
  }