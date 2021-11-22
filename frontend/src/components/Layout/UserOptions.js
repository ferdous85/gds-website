import React from 'react'
import {Dropdown} from 'react-bootstrap'
import './UserOptions.css'
import { useSelector, useDispatch } from 'react-redux';
import { BiUserCircle } from "react-icons/bi";
import { MdExitToApp, MdDashboard } from "react-icons/md";
import {logout} from '../../actions/userAction'


import { useHistory } from 'react-router';


const UserOptions = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const options = [
        { icon: <BiUserCircle />, name: "Online Class", func: onlineClass },
        { icon: <MdExitToApp />, name: "Logout", func: logoutUser },
     ]

     if (user.role === "admin") {
        options.splice(0,1,{
          icon: <MdDashboard />,
          name: "Dashboard",
          func: dashboard,
        }) 
      }


      function onlineClass() {
        history.push("/account");
      }
      function dashboard() {
        history.push("/admin/dashboard");
      }

      function logoutUser() {
        dispatch(logout());
      }

    return (
        <>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               <img 
               className='Proimage'
               src={user.avatar.url} alt={user.name} />
                {user.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                
                {options.map((item)=>(
                    <Dropdown.Item key={item.name} onClick={item.func} > {item.icon} {item.name}</Dropdown.Item>
                ))}
                
            </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserOptions
