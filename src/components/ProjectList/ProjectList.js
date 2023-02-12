import React from 'react'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list">
        {projects.length === 0 && (<p > No project yet !</p>)}
        {projects.map((project) => (
            <div key={project.id}>{project.name}</div>
        ))}
    </div>
  )
}

export default ProjectList