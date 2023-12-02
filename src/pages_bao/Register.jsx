import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import "./Register.css";

function Register({ users }) {

    const navigate = useNavigate();
    const formik = useFormik(
        {
            initialValues: {
                username: '',
                password: '',
                confirmPassword: '',
                fullname: '',
                gender: '',
                birthday: "",
                address: "",
                phone: "",

            },
            onSubmit: values => {
                addUser(values)


            },
            validationSchema: Yup.object().shape({
                username: Yup.string().required('Required').min(6).max(12),
                password: Yup.string().required('Required').min(6).max(8),
                confirmPassword: Yup.string().required('Required').min(6).max(8),
                fullname: Yup.string().required('Required'),
                gender: Yup.string().required('Required'),
                birthday: Yup.date().required('Required'),
                address: Yup.string().required('Required'),
                phone: Yup.string().required('Required').length(10),




            }),

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

        <div className="container">
            <div className="row">
                <h1 className="text-center">REGISTER MEMBER</h1>
                <form action="" className="form-control mx-auto px-5 w-75 register" onSubmit={formik.handleSubmit}>
                    <label htmlFor="username" className="d-block">Username</label>
                    <input type="text"
                        name="username"
                        id="username"
                        placeholder="Username cons
                                Username includes 6 to 24 characters, no spaces" className="w-100"
                        onChange={formik.handleChange}

                    />
                    {users.filter((user) => user.username === formik.values.username).length !== 0 ? (
                        <span className="text-danger">{formik.errors.username = "Username already exists, please choose another name"}</span>
                    ) : null}
                    {formik.errors.username && formik.touched.username ? (
                        <span className="text-danger">{formik.errors.username}</span>
                    ) : null}


                    <label htmlFor="password" className="d-block">Password</label>
                    <input type="password" name="password" id="password" className="w-100" onChange={formik.handleChange} />
                    {formik.errors.password && formik.touched.password ? (
                        <span className="text-danger">{formik.errors.password}</span>
                    ) : null}


                    <label htmlFor="confirmPassword" className="d-block">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="w-100" onChange={formik.handleChange} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                        <span className="text-danger">{formik.errors.confirmPassword}</span>
                    ) : null}


                    <label htmlFor="fullname" className="d-block"> Full name</label>
                    <input type="text" name="fullname" id="fullname" className="w-100 d-block" onChange={formik.handleChange} />
                    {formik.errors.fullname && formik.touched.fullname ? (
                        <span className="text-danger">{formik.errors.fullname}</span>
                    ) : null}


                    <label htmlFor="gender" className="me-3">Gender: </label>
                    <label htmlFor="male" className="me-2">Male</label>
                    <input type="radio" name="gender" id="male" value="male" onChange={formik.handleChange} />

                    <label htmlFor="female" className="ms-3 me-2">Female</label>
                    <input type="radio" name="gender" value="female" />
                    <label htmlFor="birthday" className="d-block"  >Birthday</label>
                    <input type="datetime-local" name="birthday" id="birthday" onChange={formik.handleChange} />
                    {formik.errors.birthday && formik.touched.birthday ? (
                        <span className="text-danger">{formik.errors.birthday}</span>
                    ) : null}
                    <label htmlFor="address" className="d-block">Address</label>
                    <input type="text" name="address" id="address" className="w-100" onChange={formik.handleChange} />
                    {formik.errors.address && formik.touched.address ? (
                        <span className="text-danger">{formik.errors.address}</span>
                    ) : null}
                    <label htmlFor="phone" className="d-block" >Phone Number</label>
                    <input type="text" name="phone" id="phone" onChange={formik.handleChange} className='d-block' />
                    {formik.errors.phone && formik.touched.phone ? (
                        <span className="text-danger">{formik.errors.phone}</span>
                    ) : null}
                    <div className="row mx-auto mt-3">
                        <div className='w-25 d-inline-block invisible'>aa</div>
                        <input type="submit" value="Register" className=" d-inline-block  w-25 me-3 btn btn-success" />
                        <input type="reset" value="Reset" className="d-inline-block  w-25 btn btn-success" />

                    </div>

                </form>
            </div>


        </div>
    );
}

export default Register
