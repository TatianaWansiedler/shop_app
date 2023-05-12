import { TextField } from '@mui/material';
import React from 'react';

const LoginForm = ({styles}) => {
    return (
        <form className={styles.form}>
             <h2 className={styles.title}>Login</h2>
             <div className={styles.control}>
                <TextField
                    label="Email" 
                    variant="outlined"
                    name="email"
                />
             </div>
             <div className={styles.control}>
                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
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