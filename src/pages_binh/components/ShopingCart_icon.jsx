import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ShopingCart_icon(props) {
  const { numberofproduct } = useSelector((state) => state.shopReducer);
  const navigate = useNavigate();

  useEffect(() => {}, [numberofproduct]);

  return (
    <>
      <i className="fa fa-shopping-bag"></i>
      {numberofproduct > 0 && (
        <div
          className="shopee-cart-number-badge"
          style={{
            display: "inline",
            background: "white",
            color: "#79523E",
            padding: "0 5px",
            borderRadius: "50%",
            fontSize: "8px",
            position: "absolute",
            top: "-0.2em",
            left: "1em",
            border: "solid 0.7px",
            fontWeight: "700",
          }}
        >
          {numberofproduct}
        </div>
      )}
    </>
  );
}
