import { useState, useEffect } from "react";
import { Alert, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCartAction, addToCompare } from "../redux/reducers/shopReducer";
import alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

export default function ProductSearch(props) {
  const { dataProductSearch } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(dataProductSearch);
  }, []);
  return (
    <div className="container">
      <div className="row py-10">
        <div className="col-md-12">
          <h2>
            Search Result <b></b>
          </h2>
          <div>
            <div className="carousel-inner">
              <div className="item">
                <div className="row">
                  {dataProductSearch.length <= 0 && (
                    <Alert variant="danger" className="mt-3">
                      Product not found. Please try again later.
                    </Alert>
                  )}
                  {dataProductSearch.map((product, index) => {
                    const shortenedName =
                      product.name.length > 20
                        ? `${product.name.slice(0, 15)}...`
                        : product.name;
                    return (
                      <div className="col-sm-3 mb-3" key={index}>
                        <div className="thumb-wrapper card pb-3">
                          <span className="wish-icon">
                            <i className="fa fa-heart-o" />
                          </span>
                          <div className="img-box">
                            <img
                              src={product.image}
                              className="img-responsive"
                              alt=""
                              onClick={() =>
                                navigate("/product-detail", {
                                  state: { key: product.name },
                                })
                              }
                              style={{
                                border: "none",
                                background: "white",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                          <div className="thumb-content px-3">
                            <h4
                              onClick={() =>
                                navigate("/product-detail", {
                                  state: { key: product.name },
                                })
                              }
                              style={{
                                border: "none",
                                background: "white",
                                cursor: "pointer",
                              }}
                            >
                              {shortenedName}
                            </h4>
                            <p className="item-price">
                              <strike>
                                ${Math.round(product.price * 1.2)}
                              </strike>{" "}
                              <span>${product.price}</span>
                            </p>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="fa fa-star-o" />
                                </li>
                              </ul>
                            </div>
                            <NavLink
                              to="#"
                              className="btn btn-dark text-white"
                              onClick={() => {
                                const productCart = {
                                  ...product,
                                  quantityInCart: 1,
                                };
                                const action = addToCartAction(productCart);
                                dispatch(action);
                                alertify.success("Added to cart successfully!");
                              }}
                            >
                              Add to Cart
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
