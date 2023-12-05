import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CheckOutSuccess() {
    return (
        <div className="ordersuccess__container mt-3 container-fluid">
            <i className="fas fa-check-circle fa-3x" />
            <h1 className="order__mess">Order Successfully Placed</h1>
            <p className="order__desc">
                Your order number is <strong style={{ color: 'red' }}>#2308A0</strong>
            </p>
            <p style={{"textAlign":"center"}}>
                We have sent a confirm email from bbluvcode@gmail.com to your email address!
            </p>
            
            <NavLink className="btn btn-danger" to="/">CONTINUE SHOPPING</NavLink>
        </div>

    )
}
