import ShopingCartItem from "./ShopingCartItem";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
import RelatedProduct from "./components/RelatedProduct";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { updateDiscountVoucher, updatePromotion, updateShippingFee, updateTotal, updatenumberofproduct } from "../redux/reducers/shopReducer";
import { useNavigate } from "react-router-dom";
// import { SweetAlert2, Swal } from "sweetalert2-react-content";
import Swal from 'sweetalert2'

function ShopingCart(props) {
  const { shopingcart } = props;
  const { numberofproduct } = useSelector((state) => state.shopReducer);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [voucherCode, setVoucherCode] = useState("");
  const [discountVoucher, setDiscountVoucher] = useState(0);
  const [productCount, setProductCount] = useState(numberofproduct);
  const [errore, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [total, setTotal] = useState(0);
  const [promotion, setPromotion] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const updateOrderSummary = () => {
    let newSubpromotion = 0;
    let newSubtotal = 0;
    let count = 0;

    shopingcart.forEach((product) => {
      newSubpromotion += (product.price * product.discount) / 100;
      newSubtotal += product.price * product.quantityInCart;
      count += product.quantityInCart;
    });

    const newShippingFee = 0.005 * newSubtotal;

    const newTotal = newSubtotal - newSubpromotion + newShippingFee;

    setPromotion(newSubpromotion);
    setSubtotal(newSubtotal);
    setProductCount(count);
    setShippingFee(newShippingFee);
    setTotal(newTotal);
    // if (count != 0) {
    //   dispatch(updatenumberofproduct(productCount));
    // }
    dispatch(updatenumberofproduct(count));
  };

  const applyVoucher = () => {
    setError("");
    setSuccess("");
    if (voucherCode === "2308A0_GROUP1") {
      const newDiscountVoucher = 0.5 * subtotal;
      setDiscountVoucher(newDiscountVoucher);
      setTotal(subtotal + shippingFee - newDiscountVoucher);
      setSuccess("You have received a 50% discountVoucher!");
    } else {
      setDiscountVoucher(0);
      setTotal(subtotal + shippingFee);
      setError("Invalid voucher code.");
    }
    if (voucherCode.trim() === "") {
      setError("");
      setSuccess("");
    }
  };

  const updatePayment = () => {
    dispatch(updateTotal(total));
    dispatch(updateShippingFee(shippingFee));
    dispatch(updatePromotion(promotion));
    dispatch(updateDiscountVoucher(discountVoucher));
  }

  useEffect(() => {
    updateOrderSummary();
  }, [shopingcart]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="container-fluid">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            {shopingcart.length === 0 ? (
              <Alert variant="danger">Shopping cart is empty</Alert>
            ) : (
              shopingcart.map((product, index) => {
                return (
                  <ShopingCartItem
                    product={product}
                    index={index}
                    updateOrderSummary={updateOrderSummary}
                  />
                );
              })
            )}
          </div>
          {/* -----Orders Summary------------------------------------ */}
          <div className="col-lg-5 col-md-5 order_summary">
            <div className="order_info card p-4" id="order_info">
              <div className="container mt-0">
                <h2 className="mt-0">Order Summary</h2>
                <table className="w-100 ">
                  <tr>
                    <td>Subtotal({productCount} items)</td>
                    <td className="right">${formatter.format(subtotal)}</td>
                  </tr>
                  {promotion > 0 && (
                    <tr>
                      <td>Promotion</td>
                      <td className="right">- ${formatter.format(promotion)}</td>
                    </tr>
                  )}
                  <tr>
                    <td>Shipping Fee(5%)</td>
                    <td className="right">${formatter.format(shippingFee)}</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className=" w-100 btn btn-outline-dark"
                        type="text"
                        placeholder="Enter Voucher Code"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-dark w-100"
                        onClick={applyVoucher}
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      {success && (
                        <div className="text-success mt-2">{success}</div>
                      )}
                      {errore && (
                        <div className="text-danger mt-2">{errore}</div>
                      )}
                    </td>
                  </tr>
                  {discountVoucher > 0 && (
                    <tr>
                      <td>Voucher</td>
                      <td className="right">- ${formatter.format(discountVoucher)}</td>
                    </tr>
                  )}
                  <tr className="">
                    <td className="bold">Total</td>
                    <td className="right">
                      <strong>
                        ${formatter.format(total - discountVoucher)}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "right" }}>
                      VAT included, where applicable
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "left" }}>
                      <b>Delivery information:</b> about 2 - 7 days
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button className="btn btn-dark w-100" onClick={() => {
                        if (total === 0) {
                          // alert("Please add the product to the cart.");
                          Swal.fire({
                            title: "Please add the product to the cart.",
                            showClass: {
                              popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                              popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                          });
                        } else {
                          updatePayment();
                          navigate("/checkout");
                        }
                      }}>
                        CONFIRM CART
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          {/* ---------------------------------Orders Summary Mobile - Tablet------------------- */}
          <div className="container-fluid order_summary_mobile-tablet bg-light">
            <div className="row voucher_mobile-tablet">
              <div className="col-9 p-0">
                <input
                  className=" w-100 btn btn-outline-dark voucher_mobile-tablet_input"
                  type="text"
                  placeholder="Enter Voucher Code"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                />
              </div>
              <div className="col-3 p-0">
                <button
                  className="btn btn-dark w-100 voucher_mobile-tablet_btn"
                  onClick={applyVoucher}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-8 mt-2 ps-5 ordersummary-mobile ordersummary-content-mobile">
                <strong>Subtotal: ${formatter.format(subtotal)}</strong>
                <p style={{ fontSize: "0.8em", marginBottom: "0" }}>
                  Shipping Fee: ${formatter.format(shippingFee)}
                </p>
                <p style={{ fontSize: "0.8em", marginBottom: "0px" }}>
                  {promotion > 0 && `Discount: - ${promotion}`}
                </p>
                <p style={{ fontSize: "0.8em" }}>
                  {discountVoucher > 0 && `Voucher: - ${discountVoucher}`}
                </p>
              </div>
              <div className="col-4 ordersummary-mobile ordersummary-button-mobile">
                <button
                  className="btn btn-dark w-100 ordersummary-button-mobile px-0"
                  style={{ fontSize: "0.8em" }} onClick={() => {
                    if (total == 0) {
                      // alert("Please add the product to the cart.");
                      Swal.fire({
                        title: "Please add the product to the cart.",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                    } else {
                      updatePayment();
                      navigate("/checkout");
                    }
                  }}
                >
                  CONFIRM CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------You May Also Like---------------------------------- */}
      <div className="container">
        <RelatedProduct />
      </div>
    </div>
  );
}

export default ShopingCart;
