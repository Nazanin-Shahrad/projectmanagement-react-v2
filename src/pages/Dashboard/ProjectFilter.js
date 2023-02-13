import React, { useState } from 'react';
import './dashboard.css';

const filterList = ['all' , 'mine' , 'development','design' , 'marketing' , 'sales','productline']

const ProjectFilter = ({currentFilter, changeFilter}) => {
   

    const handleClick=(newFilter) => {
        console.log(newFilter);
        changeFilter(newFilter);
    }
  return (
    <div className='project-filter'>
        <nav>
            {filterList.map((f) => (
                <button key={f} onClick={() => handleClick(f)} className={currentFilter === f ? 'active' : ''} >
                    {f}
                </button>
            ))}
        </nav>
    </div>
  )
}

export default ProjectFilter