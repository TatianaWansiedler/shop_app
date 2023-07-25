import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import * as yup from 'yup'
import authService from "../../services/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";


const registerSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required"),
  username: yup
    .string()
    .min(5, "Must be at least 8 characters")
    .max(20, "Must be no more than 30 characters")
    .required()
})


const RegisterForm = ({ styles }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const resp = await authService.register(values)
        toast.success("Successful!", {
          autoClose: 2500,
        })
        dispatch(loginSuccess(resp.data))

      } catch (error) {
        toast.error('User already exists', {
          autoClose: 2500,
        })
      }
      resetForm()
    },
    validationSchema: registerSchema
  })

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <TextField
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          label="Email"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className={styles.control}>
        <TextField
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          onBlur={formik.handleBlur}
          label="Username"
          variant="outlined"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div className={styles.control}>
        <TextField
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          label="Password"
          variant="outlined"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
        />
      </div>
      <p className={styles.privacy}>
        Your personal data will be used to support your experience
        throughout this website, to manage access to your account,
        and for other purposes described in our<a href="/" className={styles.link_policy}>privacy policy</a> .
      </p>
      <input type="submit" value="Register" className={styles.submit} />
      <ToastContainer />
    </form>
  );
};

export default RegisterForm;
