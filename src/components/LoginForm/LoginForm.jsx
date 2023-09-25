import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import authService from "../../services/auth"
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginSuccess, setAccessToken } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = ({ styles }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const userData = { email, password }
        try {
            const resp = await authService.login(userData)
            console.log(resp.data);
            setToken(resp.data.access_token)
            dispatch(setAccessToken(resp.data.access_token))
        } catch (error) {
            toast.error(error.response.data)
            console.log(error);
        }
    }

    const setUser = async (token) => {
        try {
            const resp = await authService.getUser(token)
            const user = await resp.json()
            dispatch(loginSuccess(user))
            
            toast.success("Successful!", {
                autoClose: 2500,
            });
            setEmail('')
            setPassword('')
            setTimeout(() => {
                navigate('/catalog')
            }, 1000)
        } catch (error) {
            toast.error(error.response.data)
            console.log(error);
        }
    }
    useEffect(() => {
        if (token) {
            setUser(token)
        }
    }, [token])

    //add to readme 
    // {
    //     "email": "john@mail.com",
    //         "password": "changeme"
    // }
    // for login type any users data from this API https://api.escuelajs.co/api/v1/users


    return (
        <form className={styles.form} onSubmit={login}>
            <h2 className={styles.title}>Login</h2>
            <div className={styles.control}>
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.control}>
                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.controlCheckbox}>
                <input type="checkbox" name="checkbox" className={styles.checkbox} />
                <label htmlFor="checkbox" className={styles.labelCheckbox}>Remember me</label>
            </div>
            <div className={styles.controlSubmit}>
                <input type="submit" value="Log In" className={styles.submit} />
                <Link className={styles.link_forgot} to={'/'}>Lost Your Password?</Link>
            </div>

        </form>
    );
};

export default LoginForm;