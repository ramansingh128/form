import React,{useState} from 'react'

const Register = ({ setToggle, setUsers }) => {
const [formData, setFormData] = useState({
name:"Alok",
email:"alok@gmail.com",
password:"12333",
confirmPassword:"123"
});



const handleChange = (e) => {
  let { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
setUsers((prev) => [...prev, formData]); 
setFormData({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  image: ""
});
  console.log(formData);
};

  return (
    <div className="bg-white p-6 w-90 rounded-xl shadow-md flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 " action ="">
        <input
        required
        value={formData.name}
        name="name"
         onChange={handleChange} 
         className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
         type="text" placeholder='Username' />
         <input 
         required
         value={formData.email}
          name="email" onChange={handleChange}
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="text" 
                 placeholder='Email' />

        <input 
        required
        value={formData.password}
         name="password" onChange={handleChange}
         className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
           placeholder='Password' />
        <input 
        required
        value={formData.confirmPassword} 
        name="confirmPassword" onChange={handleChange}
         className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
         type="password" placeholder='Confirm Password' />

        <input 
        required
        value={formData.image} 
        name="image" onChange={handleChange}
         className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
         type="URL" placeholder='image' />

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        type="submit">Register</button>
      </form>
      <p>Already have an account?
        <span 
      onClick={() =>setToggle(prev => !prev)}
      className="text-blue-500 hover:underline cursor-pointer">Log in</span> </p>
    </div>
  )
}

export default Register
  
