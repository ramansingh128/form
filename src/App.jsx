import React,{useState} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Usercards from './components/usercards';


const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
   
    <div className="bg-gray-300 h-screen flex items-center justify-center">
    { toggle ?(
     users.map((elem) => <Usercards user={elem} />)
     ) : (
       <Register setUsers={setUsers} users={users} setToggle={setToggle} />
       )}
    </div>
  )
}

export default App
