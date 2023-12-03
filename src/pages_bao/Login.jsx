import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
function Login({ users }) {
    const navigate = useNavigate();
    console.log(users);


    const checkLogin = (userCheck) => {

        if (users.filter(user => user.username === userCheck.username).length !== 0) {
            if (users.filter(user => user.username === userCheck.username)[0].password === userCheck.password) {
                alert("Login successfully");
                sessionStorage.setItem("islogin", "true");
                sessionStorage.setItem("username", userCheck.username);
                navigate(-1);

            } else alert("Login fail because password is wrong")
        } else {
            alert("Username không tồn tại");
            return false;
        }

    }
    const formik = useFormik(
        {
            initialValues: {
                username: '',
                password: '',

            },

            onSubmit: values => {
                checkLogin(values)
            },


            validationSchema: Yup.object().shape({
                username: Yup.string().required('Required').min(6).max(12),
                password: Yup.string().required('Required').min(6).max(8),

            }),

        }
    )


    return (
        <div className="container">
            <div className="row">
                <h1> Login account</h1>
                <form action="" onSubmit={formik.handleSubmit} className="col-md-6">
                    <label htmlFor="username" className="d-block">Username</label>
                    <input type="text"
                        name="username"
                        id="username"
                        placeholder="Username cons
                                Username includes 6 to 24 characters, no spaces"
                        className="w-100"
                        onChange={formik.handleChange}

                    />
                    {formik.errors.username && formik.touched.username ? (
                        <span className="text-danger">{formik.errors.username}</span>
                    ) : null}

                    <label htmlFor="password" className="d-block">Password</label>
                    <input type="password"
                        name="password"
                        id="password"
                        className="w-100"
                        onChange={formik.handleChange} />
                    {formik.errors.password && formik.touched.password ? (
                        <span className="text-danger">{formik.errors.password}</span>
                    ) : null}
                    <div className="row">
                        <button type="submit" className="btn btn-info btn-md mt-3 col-md-3">Login</button>

                        <a href="" className="register"  onClick={() => navigate("/register")}>
                            If you don't have an account, register here</a>

                    </div>

                </form>

            </div>
        </div>

    );
}

export default Login;