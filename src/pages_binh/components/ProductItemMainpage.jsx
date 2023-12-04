import {
  addToCartAction,
  addToCompare,
} from "../../redux/reducers/shopReducer";
import { useDispatch } from "react-redux";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { useNavigate } from "react-router-dom";
import WishListItem from "../WishListItem";
import { useState } from "react";

function ProductItemMainpage(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [stars, setStars] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="binh-father-card">
      <div className="card text-start mt-4">
        {product.isBest && (
          <div className="best-sell wrap-badgebyme">
            <div className="badgebyme w-100 h-100">
              <img src="img/logo/badge.png" alt="" className="w-100 h-100" />
              <span className="new-badge"> BEST SELL </span>
            </div>
          </div>
        )}

        {product.isNew && (
          <div className="best-sell wrap-badgebyme">
            <div className="badgebyme w-100 h-90">
              <img src="img/logo/badge.png" alt="" className="w-100 h-100" />
              <span className="new-badge"> NEW </span>
            </div>
          </div>
        )}

        <img
          className="card-img-top related_img"
          src={product.image}
          alt="Title"
          onClick={() =>
            navigate("/product-detail", { state: { key: product.name } })
          }
          style={{ border: "none", background: "white", cursor: "pointer" }}
        />

        <div className="card-body">
          <div className="container-fluid">
            <div className="related_info">
              <div className="row justify-content-between d-flex">
                <div
                  className="col-10"
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
                  <h5 className="card-title card-title_binh">
                    {product.name.length > 20
                      ? `${product.name.slice(0, 12)}...`
                      : product.name}
                  </h5>
                </div>
                <div className="col-2">
                  <WishListItem product={product} />
                </div>
              </div>
              <span className="row price-left">
                <div className="col-8 col-md-10 product-price">
                  {product.discount > 0 ? (
                    <div>
                      {" "}
                      <strike>${Math.round(product.price)}</strike>
                      <span>
                        $
                        {Math.round(
                          product.price -
                            (product.discount * product.price) / 100
                        )}
                      </span>
                    </div>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </div>
                <div className="col-4 col-md-2 text-center p-0">
                  <span className="badge bg-danger p-2">
                    {product.discount > 0 ? `-${product.discount}%` : null}
                  </span>
                </div>

                <div className="star-rating">
                  <ul className="list-inline">
                    {stars
                      .filter((star) => star <= product.review[0].star)
                      .map((star) => (
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                      ))}
                  </ul>
                </div>
              </span>
            </div>

            <div className="row mt-1 binh-home-hide button-product">
              <div className="col-9 col-sm-12 ms-md-0 col-md-12 col-lg-12 p-0">
                <button
                  style={{ border: "solid 1px " }}
                  className="btn btn-dark w-100 btn-productitem"
                  onClick={() => {
                    const productCart = { ...product, quantityInCart: 1 };
                    const action = addToCartAction(productCart);
                    dispatch(action);
                    alertify.success("Added to cart successfully!");
                    window.scrollTo(200, 350);
                  }}
                >
                  <i className="fa fa-cart-plus"></i>
                  <span className="span_binh_mobile ms-1">Add to cart</span>
                </button>
              </div>
              <div className="col-3 col-sm-12 ms-md-0 col-md-12 col-lg-12 p-0">
                <button
                  className="btn btn-outline-dark w-100 btn-productitem"
                  onClick={() => {
                    dispatch(addToCompare(product));
                    navigate("/compare");
                    window.scrollTo(0, 0);
                  }}
                >
                  <i className="fa fa-exchange-alt icon-compare-mobile"></i>
                  <span className="span_binh ms-1">Add to compare</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemMainpage;
