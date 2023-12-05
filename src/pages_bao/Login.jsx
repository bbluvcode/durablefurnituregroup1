import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
function Login({ users }) {
    const [signIn, setSignIn] = useState(true);
    const navigate = useNavigate();

    const checkLogin = (userCheck) => {
        if (users.filter(user => user.username === userCheck.username).length !== 0) {
            if (users.filter(user => user.username === userCheck.username)[0].password === userCheck.password) {
                alert("Login successfully");
                sessionStorage.setItem("islogin", "true");
                sessionStorage.setItem("username", userCheck.username);
                navigate(-1);
            } else alert("Login fail because password is wrong")
        } else {
            alert("Username not valid");
            return false;
        }
    }
    const formik = useFormik(
        {
            initialValues: {
                username: '',
                password: '',
                confirmPassword: '',
                fullname: '',
                email: '',
                phone: "",
            },
            validationSchema: Yup.object().shape({
                username: Yup.string().required('Required').min(6).max(12),
                password: Yup.string().required('Required').min(6).max(8),
                confirmPassword: Yup.string().required('Required').min(6).max(8),
                fullname: Yup.string().required('Required'),
                email: Yup.string().required('Required').email(),
                phone: Yup.string().required('Required').length(10),
            }),

            onSubmit: values => {
                if (signIn) {
                    checkLogin(values)
                } else {
                    addUser(values)
                }
            },
        }
    )

    const addUser = (newUser) => {

        // console.log(newUser);
        fetch('https://655fffed83aba11d99d01309.mockapi.io/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(newUser)
        }).then(res => {
            if (res.ok) {
                alert("Register account user successfully");
            }
        }).then(() => navigate(`/login`))
    }


    return (
        <div className={`container-login ${signIn ? null : "right-panel-active"}`} id="container-login">
            <div className="form-container-login sign-up-container-login">
                <form action="#" onSubmit={formik.handleSubmit} className="form-login">
                    {/* -----------------SignUp------------------ */}
                    <h1>Create Account</h1>
                    <div className="social-container-login">
                        <NavLink to="/" className="social"><i className="fab fa-facebook-f" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-google-plus-g" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-linkedin-in" /></NavLink>
                    </div>
                    <span>or use your email for registration</span>
                    <input onChange={formik.handleChange} type="text" placeholder="User Name" />{formik.errors.username && formik.touched.username ? (
                        <span className="text-danger">{formik.errors.username}</span>
                    ) : null}
                    <input onChange={formik.handleChange} type="text" placeholder="Number Phone" />{formik.errors.phone && formik.touched.phone ? (
                        <span className="text-danger">{formik.errors.phone}</span>
                    ) : null}
                    {/* <input onChange={formik.handleChange} type="email" placeholder="Email" />{formik.errors.password && formik.touched.password ? (
                        <span className="text-danger">{formik.errors.password}</span>
                    ) : null} */}
                    <input onChange={formik.handleChange} type="password" placeholder="Password" />
                    <button className="button-login">Sign Up</button>
                </form>
            </div>
            {/* -----------------SignUpEnd------------------ */}

            {/* -----------------SignIn------------------ */}
            <div className="form-container-login sign-in-container-login">
                <form action="#" className="form-login">
                    <h1>Sign in</h1>
                    <div className="social-container-login">
                        <NavLink to="/" className="social"><i className="fab fa-facebook-f" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-google-plus-g" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-linkedin-in" /></NavLink>
                    </div>
                    <span>or use your email</span>
                    <input onChange={formik.handleChange} type="text" placeholder="Username" />{formik.errors.username && formik.touched.username ? (
                        <span className="text-danger">{formik.errors.username}</span>
                    ) : null}
                    <input onChange={formik.handleChange} type="password" placeholder="Password" />{formik.errors.password && formik.touched.password ? (
                        <span className="text-danger">{formik.errors.password}</span>
                    ) : null}
                    <NavLink to="/">Forgot your password?</NavLink>
                    <button className="button-login" >Sign In</button>
                </form>
            </div>
            {/* -----------------SignInEnd------------------ */}
            <div className="overlay-container-login">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className={`ghost button-login `} onClick={() => {
                            setSignIn(true)
                        }}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className={`ghost button-login`} onClick={() => {
                            setSignIn(false)
                        }}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;