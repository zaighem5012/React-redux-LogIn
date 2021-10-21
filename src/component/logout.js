import React from 'react'
import { logout } from '../features/userSlice';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './logout.css'
function Logout() {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        history.push('/')
    };
    return (
        <div className='logout'>
            <h1>Welcome <span className='user__name'>User</span></h1>
            <button className='btn' onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}
export default Logout
