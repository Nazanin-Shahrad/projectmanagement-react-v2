import React from 'react'
import './avatar.css';

const Avatar = ({src}) => {
  return (
    <div className='avatar'>
        <img src={src} alt="" />
    </div>
  )
}

export default Avatar