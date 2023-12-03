import React from 'react'
import { NavLink } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { format, addDays } from 'date-fns';
import { emptyCart } from '../redux/reducers/shopReducer';


export default function CheckOut() {
    const { total, shippingFee, promotion, discountVoucher } = useSelector(state => state.shopReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formatter = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const estimatedDeliveryDate = addDays(new Date(), 5);
    const formattedDeliveryDate = format(estimatedDeliveryDate, 'd MMMM, yyyy');

    return (
        <div className="container container-binh bg-light d-md-flex align-items-center">
            <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
                <div className="fw-bolder mb-4">
                    <span className="fas fa-dollar-sign" />
                    <span className="ps-1">{formatter.format(total)}</span>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between text-binh">
                        <span>Subtotal</span>
                        <span className="fas fa-dollar-sign">
                            <span className="ps-1">{formatter.format(promotion + discountVoucher + total + shippingFee)}</span>
                        </span>
                    </div>
                    {(promotion + discountVoucher) > 0 && (<div className="d-flex align-items-center justify-content-between text-binh">
                        <span className>Total discount</span>
                        <span className="fas fa-dollar-sign">
                            <span className="ps-1">{formatter.format(promotion + discountVoucher)}</span>
                        </span>
                    </div>)}
                    
                    <div className="d-flex align-items-center justify-content-between text-binh mb-2">
                        <span className>Total shipping fee</span>
                        <span className="fas fa-dollar-sign">
                            <span className="ps-1">{formatter.format(shippingFee)}</span>
                        </span>
                    </div>
                    <div className="border-bottom mb-4" />
                    <div className="d-flex flex-column mb-4">
                        <span className="far fa-file-alt text-binh">
                            <span className="ps-2">Invoice ID:</span>
                        </span>
                        <span className="ps-3">2308A0</span>
                    </div>
                    <div className="d-flex flex-column mb-5">
                        <span className="far fa-calendar-alt text-binh">
                            <span className="ps-2">Estimated delivery:</span>
                        </span>
                        <span className="ps-3">{formattedDeliveryDate}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between text-binh mt-5">
                        <div className="d-flex flex-column text-binh">
                            <span>Customer Support:</span>
                            <span>online chat 24/7</span>
                        </div>
                        <div className="btn btn-primary rounded-circle" onClick={()=>{
                            navigate("/contact")
                        }}>
                            <span style={{ "color": "#3b3a3a" }} className="fas fa-comment-alt" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card box2 shadow-sm">
                <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
                    <span className="h5 fw-bold m-0">Payment methods</span>
                    <div className="btn btn-primary bar">
                        <span className="fas fa-bars" />
                    </div>
                </div>
                <ul className="nav nav-tabs mb-3 px-md-4 px-2">
                    <li className="nav-item">
                        <NavLink className="nav-link px-2 active" aria-current="page" to="#">Credit Card</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link px-2" to="#">Mobile Payment</NavLink>
                    </li>
                    <li className="nav-item ms-auto">
                        <NavLink className="nav-link px-2" to="#">+ More</NavLink>
                    </li>
                </ul>
                <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
                    <div className="btn btn-success me-4">
                        <span className="fas fa-plus" />
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">
                            <span className="pe-1">+</span>4619</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">
                            <span className="lpe-1">+</span>8007</label>
                    </div>
                </div>
                <form action>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-column px-md-5 px-4 mb-4">
                                <span>Credit Card</span>
                                <div className="inputWithIcon">
                                    <input className="form-control" type="text-binh" defaultValue="4619 3000 5678 1234" />
                                    <span className>
                                        <img className='img-visa' src="img/logo/visalogo.png" alt='logvisa' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                                <span>Expiration<span className="ps-1">Date</span>
                                </span>
                                <div className="inputWithIcon">
                                    <input type="text-binh" className="form-control" defaultValue="03/2026" />
                                    <span className="fas fa-calendar-alt" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <span>Code CVV</span>
                                <div className="inputWithIcon">
                                    <input type="password" className="form-control" defaultValue={123} />
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column px-md-5 px-4 mb-4">
                                <span>Name</span>
                                <div className="inputWithIcon">
                                    <input className="form-control text-binh-uppercase" type="text-binh" defaultValue="VO THI BE BINH" />
                                    <span className="far fa-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 px-md-5 px-4 mt-3">
                            <button onClick={() => {
                                dispatch(emptyCart());
                                navigate("/checkoutsuccess")
                            }} className="btn btn-primary w-100">Pay {formatter.format(total)}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
}
