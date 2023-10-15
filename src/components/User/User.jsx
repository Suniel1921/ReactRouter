import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {id }= useParams();
  return (
    <>
        <div className='text-center bg-gray-600 text-white text-3xl p-5'>
            <h3>User : {id} </h3>
        </div>
    </>
  )
}

export default User