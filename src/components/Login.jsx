import React from 'react'

const Login = ({ setToggle }) => {
  return (
    <div className="bg-white p-6 w-90 rounded-xl shadow-md flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form className="flex flex-col gap-4 " action ="">
        <input className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='Username' />
        <input className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder='Password' />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Login</button>
      </form>
      <p>Dont have an account? <span 
        onClick={() => setToggle(prev => !prev)}
        className="text-blue-500 hover:underline cursor-pointer">Sign up</span> </p>
    </div>
  )
}

export default Login
  