import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Login() {
    const [signIn, setSignIn] = useState(true);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isReg, setIsReg] = useState(false);

    useEffect(() => {
        fetch("https://655fffed83aba11d99d01309.mockapi.io/users")
            .then((data) => data.json())
            .then((dataList) => setUsers(dataList));



    }, [isReg])
    console.log(isReg);
    var arrUsername = [];
    users.map(user => arrUsername.push(user.username));
    console.log(arrUsername);

    const checkLogin = (userCheck) => {
        console.log(userCheck);
        if (users.filter(user => user.username === userCheck.username).length !== 0) {
            if (users.filter(user => user.username === userCheck.username)[0].password === userCheck.password) {
                alert("Login successfully");
                sessionStorage.setItem("islogin", "true");
                sessionStorage.setItem("username", userCheck.username);
                setSignIn(false);
                navigate("/");
            } else alert("Login fail because password is wrong")
        } else {
            alert("Username not valid");
            return false;
        }
    }
    const formikLogin = useFormik(
        {
            initialValues: {
                username: '',
                password: '',
            },
            validationSchema: Yup.object().shape({
                username: Yup.string().required('Required').min(6).max(12),
                password: Yup.string().required('Required').min(6).max(8),
            }),
            onSubmit: values => {
                if (signIn) {
                    checkLogin(values)
                } else {
                    navigate("/");
                }
            }

        },

    )


    const formikRegister = useFormik(
        {
            initialValues: {
                username: '',
                password: '',
                phone: "",

            },
            onSubmit: values => {
                addUser(values)


            },
            validationSchema: Yup.object().shape({
                username: Yup.string().required('Required').min(6).max(12),
                password: Yup.string().required('Required').min(6).max(8),
                phone: Yup.string().required('Required').length(10),

            }),


        })

    function addUser(newUser) {
        console.log(newUser);
        if (arrUsername.findIndex(element => element === newUser.username) !== -1) {
            alert("Username already exists, please choose another name");
            return false;
        }


        // console.log(newUser);
        fetch('https://655fffed83aba11d99d01309.mockapi.io/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(newUser)
        }).then(res => {
            if (res.ok) {
                alert("Register account user successfully");
                // sessionStorage.setItem("isReg", true);
                isReg === false ? setIsReg(true) : setIsReg(false)
            }
        }).then(()=>navigate("/"))
    }


    return (
        <div className={`container-login ${signIn ? null : "right-panel-active"}`} id="container-login">
            <div className="form-container-login sign-up-container-login">
                <form action="#" onSubmit={formikRegister.handleSubmit} className="form-login">
                    {/* -----------------SignUp------------------ */}
                    <h1>Create Account</h1>
                    <div className="social-container-login">
                        <NavLink to="/" className="social"><i className="fab fa-facebook-f" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-google-plus-g" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-linkedin-in" /></NavLink>
                    </div>
                    <span>or use your email for registration</span>
                    <input onChange={formikRegister.handleChange} type="text" placeholder="User Name" id="usernameReg" name="username" />

                    {formikRegister.errors.username && formikRegister.touched.username ? (
                        <span className="text-danger">{formikRegister.errors.username}</span>
                    ) : null}

                    <input onChange={formikRegister.handleChange} type="text" placeholder="Number Phone" id="phone" name="phone" />{formikRegister.errors.phone && formikRegister.touched.phone ? (
                        <span className="text-danger">{formikRegister.errors.phone}</span>
                    ) : null}
                
                    <input onChange={formikRegister.handleChange} type="password" placeholder="Password" id="password" name="password" />
                    {formikRegister.errors.password && formikRegister.touched.password ? (
                        <span className="text-danger">{formikRegister.errors.password}</span>
                    ) : null}
                    <button className="button-login" type="submit">Sign Up</button>
                </form>
            </div>
            {/* -----------------SignUpEnd------------------ */}

            {/* -----------------SignIn------------------ */}
            <div className="form-container-login sign-in-container-login">
                <form action="#" className="form-login" onSubmit={formikLogin.handleSubmit}>
                    <h1>Sign in</h1>
                    <div className="social-container-login">
                        <NavLink to="/" className="social"><i className="fab fa-facebook-f" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-google-plus-g" /></NavLink>
                        <NavLink to="/" className="social"><i className="fab fa-linkedin-in" /></NavLink>
                    </div>
                    <span>or use your email</span>
                    <input onChange={formikLogin.handleChange} type="text" placeholder="Username" name="username" />{formikLogin.errors.username && formikLogin.touched.username ? (
                        <span className="text-danger">{formikLogin.errors.username}</span>
                    ) : null}
                    <input onChange={formikLogin.handleChange} type="password" placeholder="Password" name="password" />{formikLogin.errors.password && formikLogin.touched.password ? (
                        <span className="text-danger">{formikLogin.errors.password}</span>
                    ) : null}
                    <NavLink to="/">Forgot your password?</NavLink>
                    <button className="button-login" type="submit" >Sign In</button>
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