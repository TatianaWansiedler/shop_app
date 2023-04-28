import React from "react";
import { TextField } from "@mui/material";

const RegisterForm = ({ styles }) => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <TextField 
          label="Email" 
          variant="outlined"
          
        />
      </div>
      <div className={styles.control}>
        <TextField label="Password" variant="outlined"/>
      </div>
      <input type="submit" value="Register" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;
