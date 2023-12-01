import { useDispatch } from "react-redux";
import {
  addToCartAction,
  addToCompare,
} from "../../redux/reducers/shopReducer";
import "alertifyjs/build/css/alertify.css";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";

export default function ButtonsProductPage({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <button
        className="col-md-12"
        onClick={() => {
          const productCart = { ...product, quantityInCart: 1 };
          const action = addToCartAction(productCart);
          dispatch(action);
          alertify.success("Added to cart successfully!");
        }}
      >
        {" "}
        Buy Now
      </button>
      <button
        className="col-md-12"
        onClick={() => {
          dispatch(addToCompare(product));
          navigate("/compare");
        }}
      >
        {" "}
        Add to compare
      </button>
    </>
  );
}
