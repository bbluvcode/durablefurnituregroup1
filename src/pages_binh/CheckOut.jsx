import React from 'react'

export default function CheckOut() {
    return (
        <div className="checkout__main">
            <div className="row-index1">
                <div className="checkout__main-detail">
                    <h3 className="checkout__heading">CheckOut</h3>
                    <p className="checkout__desc">
                        Fill form below to complete your purchase!
                    </p>
                    <p>Already registered? <a href="maintenace.html">Click here to login</a></p>
                    {/* checkout process */}
                    <form >
                        <div className="checkout__process">
                            {/* step1 */}
                            <div className="billing__address">
                                <h3 className="checkout__process-heading">1. BILLING ADDRESS</h3>
                                <div className="bill-address__form">
                                    <div className="group-form__checkout">
                                        <div className="group-form1">
                                            <label htmlFor="firstname">First Name<span>*</span></label>
                                            <input type="text" name="firstname" id="firstname" maxLength={50} required />
                                        </div>
                                        <div className="group-form1">
                                            <label htmlFor="lastname">Last Name<span>*</span></label>
                                            <input type="text" name="lastname" id="lastname" maxLength={50} required />
                                        </div>
                                    </div>
                                    <div className="group-form__checkout">
                                        <div className="group-form1">
                                            <label htmlFor="email">Email Address<span>*</span></label>
                                            <input type="email" name="email" id="email" maxLength={50} required />
                                        </div>
                                        <div className="group-form1">
                                            <label htmlFor="phonenumber">Phone Number<span>*</span></label>
                                            <input type="text" name="phonenumber" id="phonenumber" maxLength={30} required />
                                        </div>
                                    </div>
                                    <div className="group-form2">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" name="address" id="address" required />
                                    </div>
                                    <div className="group-form2">
                                        <label htmlFor="country">Country<span>*</span></label>
                                        <select name="country" id="country" required>
                                            <option value={0}>Select Country</option>
                                            <option value={1}>United State</option>
                                            <option value={1}>United Kingdom</option>
                                            <option value={1}>Finland</option>
                                            <option value={1}>Canada</option>
                                            <option value={1}>Australia</option>
                                            <option value={1}>Japan</option>
                                            <option value={1}>Singapo</option>
                                        </select>
                                    </div>
                                    <div className="group-form__checkout">
                                        <div className="group-form1">
                                            <label htmlFor="postalcode">Zip/ PostalCode<span>*</span></label>
                                            <input type="text" name="postalcode" id="postalcode" required />
                                        </div>
                                        <div className="group-form1">
                                            <label htmlFor="state">State/ Province<span>*</span></label>
                                            <input type="text" name="state" id="state" required />
                                        </div>
                                    </div>
                                    <div className="group-form2">
                                        <input type="checkbox" />
                                        <span>Ship to the same address</span>
                                    </div>
                                </div>
                            </div>
                            {/* step2 & step3 */}
                            <div className="step2-3__process">
                                <h3 className="checkout__process-heading">2. SHIPPING METHOD</h3>
                                <div className="step2-3__detail">
                                    <div className="shipping__method">
                                        <div className="shipping__method-free">
                                            <input type="radio" name="shipmethod" />
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className="shipping__method-pay">
                                            <input type="radio" name="shipmethod" />
                                            <span>EMS(Express Mail Services) $18.00</span>
                                            <img src="./img/payment/EMS-Logo.png" alt="emslogo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="payment__method">
                                    <h3 className="checkout__process-heading">3. PAYMENT METHOD</h3>
                                    <div className="shipping__method">
                                        <div className="shipping__method-free">
                                            <input type="radio" name="paymethod" />
                                            <span>PayPal</span>
                                            <img src="./img/payment/imagepaypal.jpg" alt="paypal" />
                                        </div>
                                        <div className="shipping__method-pay1">
                                            <input type="radio" name="paymethod" />
                                            <span>Credit Card</span>
                                            <div className="payment__method-list">
                                                <img src="./img/payment/pay3.png" alt="payment1" />
                                                <img src="./img/payment/pay4.png" alt="payment1" />
                                                <img src="./img/payment/pay5.png" alt="payment1" />
                                                <img src="./img/payment/pay6.png" alt="payment1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* step4 */}
                            <div className="step4__progress">
                                <h3 className="checkout__process-heading">4. REVIEW YOUR ORDER</h3>
                                {/* cart detail */}
                                <div className="table__detail-cart">
                                    <div>
                                    </div><div>
                                    </div><div>
                                    </div><table cellSpacing={0}>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Quanity</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Chocolate Birthday Cake</td>
                                                <td className="table__detail-input">
                                                    <input type="text" defaultValue={1} />
                                                </td>
                                                <td className="table__detail-price">$50</td>
                                            </tr>
                                            <tr style={{ marginTop: 10 }}>
                                                <td>Vanila Banana Cake</td>
                                                <td className="table__detail-input">
                                                    <input type="text" defaultValue={1} />
                                                </td>
                                                <td className="table__detail-price">$40</td>
                                            </tr>
                                            <tr style={{ marginTop: 10 }}>
                                                <td>Fruits Dry CupCake</td>
                                                <td className="table__detail-input">
                                                    <input type="text" defaultValue={1} />
                                                </td>
                                                <td className="table__detail-price">$6</td>
                                            </tr>
                                            <tr className="fix-grid fix-grid-1">
                                                <td />
                                                <td>Subtotal</td>
                                                <td>$96</td>
                                            </tr>
                                            <tr className="fix-grid">
                                                <td />
                                                <td>Shipping</td>
                                                <td>$18</td>
                                            </tr>
                                            <tr className="fix-grid">
                                                <td />
                                                <td>Total</td>
                                                <td>$114</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* coupon */}
                                <div className="group-coupon">
                                    <p>Coupon code</p>
                                    <p className="notify_coupon">Please don't leave this box blank</p>
                                    <p className="coup_code" />
                                    <input id="couponcode_input" type="text" maxLength={20} placeholder="Enter coupon code" />
                                    <button id="coupon_btn" type="button">Apply Coupon</button>
                                </div>
                                <div className="group-coupon">
                                    <p>Gift card code</p>
                                    <p className="notify_gift">Please don't leave this box blank</p>
                                    <p className="gift_code" />
                                    <input id="giftcode_input" maxLength={20} type="text" placeholder="Enter gift code" />
                                    <button id="giftcode_btn" type="button">Apply GiftCode</button>
                                </div>
                                {/* comment */}
                                <div className="group-comment">
                                    <p>Comments</p>
                                    <textarea placeholder="Add your comments" defaultValue={""} />
                                </div>
                                <div className="group-checkbox1">
                                    <input type="checkbox" />
                                    <span>Add a gift message to my order</span>
                                </div>
                                <div className="moveleft">
                                    <button type="submit" className="btn btn-checkout-placeorder">PLACE ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
