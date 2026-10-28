import React from 'react'


const Usercards = ({ user }) => {
  return (
    <div className='bg-gray-300 p-4 w-80 rounded-xl shadow-md flex flex-col gap-4 items-center justify-center border border-gray-300'>
      <div className='bg-white w-50 h-50 rounded overflow-hidden'>
        <img src={user.image} alt="" />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <button>Delete</button>
    </div>
  )
}

export default Usercards
