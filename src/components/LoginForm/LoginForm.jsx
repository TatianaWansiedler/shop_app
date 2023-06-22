import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import authService from "../../services/auth"
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({styles}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const userData = {email, password}
        try {
            const resp =  await toast.promise(
                authService.login(userData),
                {
                    success: 'Promise resolved 👌'
                }
            ) 
            dispatch(loginSuccess(resp.data))
            setEmail('')
            setPassword('')
            setTimeout(()=>{
                navigate('/catalog')
            }, 1000)
        } catch (error) {
            toast.error(error.response.data)
            console.log(error);
        }
    }


    return (
        <form className={styles.form} onSubmit={login}>
             <h2 className={styles.title}>Login</h2>
             <div className={styles.control}>
                <TextField
                    label="Email" 
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
             </div>
             <div className={styles.control}>
                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
             </div>
             <div className={styles.controlCheckbox}>
                 <input type="checkbox" name="checkbox" className={styles.checkbox} />
                 <label htmlFor="checkbox" className={styles.labelCheckbox}>Remember me</label>
             </div>
             <input type="submit" value="Log In" className={styles.submit} />
        </form>
    );
};

export default LoginForm;