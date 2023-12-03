import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  changeQuantity,
  delProductInCart,
} from "../redux/reducers/shopReducer";
import { useNavigate } from "react-router-dom";
import WishListItemDetail from "./WishListItemDetail";

function ShopingCartItem({ product, index, updateOrderSummary }) {
  const navigate = useNavigate();

  useEffect(() => {
    updateOrderSummary();
  }, [product.quantityInCart, updateOrderSummary]);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid card mb-2 p-2" key={index}>
      <div className="row">
        <div className="col-4">
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            onClick={() =>
              navigate("/product-detail", { state: { key: product.name } })
            }
            style={{ border: "none", background: "white", cursor: "pointer" }}
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-10">
              <h5
                className="card-title-cartproduct"
                onClick={() =>
                  navigate("/product-detail", { state: { key: product.name } })
                }
                style={{
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                {product.name}
              </h5>
            </div>
            <div className="col-2 deletecartbutton">
              <button
                className="btn-close"
                onClick={() => {
                  dispatch(delProductInCart(product.pid));
                }}
              ></button>
            </div>
          </div>
          <p className="card-text my-0">Material: {product.material}</p>
          <p className="card-text mb-0">Size: {product.size}</p>
          <div className="row d-flex justify-content-between">
            <div className="col-6">
              <b className="card-text">Price: {product.price}$</b>
              
            </div>
            <div className="col-6 btn-quantotal">
              <button
                className="btn btn-outline-dark mx-2 btn-quantity"
                onClick={() => {
                  const productQuantity = {
                    pid: product.pid,
                    quantityInCart: 1,
                  };
                  dispatch(changeQuantity(productQuantity));
                }}
              >
                {" "}
                +{" "}
              </button>
              <span className="quantitynumber">{product.quantityInCart}</span>
              <button
                className="btn btn-outline-dark mx-2 btn-quantity"
                onClick={() => {
                  const productQuantity = {
                    pid: product.pid,
                    quantityInCart: -1,
                  };
                  dispatch(changeQuantity(productQuantity));
                }}
              >
                -
              </button>
            </div>
            <div className="col-12">
            <p className="card-text mb-0 mt-2 d-flex">
                <WishListItemDetail product={product} />
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopingCartItem;
