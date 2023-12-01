import React from "react";
import { ListGroup, NavLink } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delProductInCart } from "../../redux/reducers/shopReducer";
import { useNavigate } from "react-router-dom";

export default function ShopingCart_float(props) {
  const { shopingcart } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="ShopingCart_float">
      <ListGroup className="mt-3">
        {shopingcart.map((product) => (
          <ListGroup.Item key={product.id}>
            <button
              className="container-fluid"
              onClick={() =>
                navigate("/product-detail", { state: { key: product.name } })
              }
              style={{ border: "none", background: "white" }}
            >
              <div className="row">
                <div className="col d-flex justify-content-between text-left">
                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      "margin-right": "10px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="text-left">
                    {product.name.length > 30
                      ? `${product.name.slice(0, 30)}...`
                      : product.name}
                  </div>
                  <div className="bold">${product.price}</div>
                </div>
                <div className="col-1">
                  <button
                    className="btn-close"
                    onClick={() => {
                      dispatch(delProductInCart(product.pid));
                    }}
                  ></button>
                </div>
              </div>
            </button>
          </ListGroup.Item>
        ))}
        {shopingcart.length > 0 && (
          <ListGroup.Item className="text-center">
            <button
              className="btn btn-dark"
              onClick={() => {
                navigate("/shopingcart");
              }}
            >
              Go to Shopingcart
            </button>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}
