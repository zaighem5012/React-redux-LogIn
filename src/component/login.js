import React, { useState } from 'react'
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './login.css'
const Login = () => {
    const history = useHistory();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: '',
    })
    const dispatch = useDispatch()
    function handleChange(evt) {
        const value = evt.target.value;
        console.log('value', value)
        setState({
            ...state,
            [evt.target.name]: value
        });
        console.log("state", state)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login(state)
        );
        history.push('Logout')
    };
    return (
        <div className='login' >
            <form className='login_form' onSubmit={handleSubmit}>
                <h1>Login here</h1>
                <input type='text' name="name" placeholder='Name' required={true} value={state.name} onChange={handleChange} />
                <input type='email' name="email" placeholder='Email' required={true} value={state.email} onChange={handleChange} />
                <input type='password' name="password" placeholder='password' required={true} value={state.password} onChange={handleChange} />
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    )
}
export default Login

