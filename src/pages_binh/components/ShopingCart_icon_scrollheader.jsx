import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ShopingCart_icon_scrollheader(props) {
  const { numberofproduct } = useSelector((state) => state.shopReducer);

  useEffect(() => {
    console.log("state:", numberofproduct);
  }, [numberofproduct]); // Thêm dependency array để chỉ chạy useEffect khi numberofproduct thay đổi

  return (
    <div className="btn btn-outline-dark">
      <i className="fa fa-shopping-bag"></i>
      {numberofproduct > 0 && (
        <div
          className="shopee-cart-number-badge btn btn-dark"
          style={{
            display: "inline",
            padding: "0 5px",
            borderRadius: "50%",
            fontSize: "8px",
            position: "relative",
            top: "-1em",
            left: "-0.5em",
            border: "solid 0.7px",
            fontWeight: "700",
          }}
        >
          {numberofproduct}
        </div>
      )}
    </div>
  );
}
