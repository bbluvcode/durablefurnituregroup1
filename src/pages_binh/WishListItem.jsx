import {
  addToWishListAction,
  delProductInWishList,
} from "../redux/reducers/shopReducer";
import { useDispatch, useSelector } from "react-redux";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { useEffect, useState } from "react";

export default function WishListItem({ product }) {
  const { wishList } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  const [isHeartRed, setIsHeartRed] = useState(false);

  const updateWishList = (product, isHeartRed) => {
    if (isHeartRed) {
      dispatch(delProductInWishList(product.pid));
    } else {
      dispatch(addToWishListAction(product));
    }
  };

  useEffect(() => {
    const isInWishList = wishList.some((item) => item.pid === product.pid);
    setIsHeartRed(isInWishList);
  }, [wishList, product]);
  return (
    <div className=" col-md-2">
      <button
        className="text-right"
        style={{ border: "none", background: "white" }}
        onClick={() => {
          updateWishList(product, isHeartRed);

          isHeartRed
            ? alertify.error("Removed from Wishlist!")
            : alertify.success("Added to Wishlist successfully!");
        }}
      >
        <i
          class={`fa-heart d-block ${
            isHeartRed ? "red-heart fa" : "black-heart fa-regular"
          }`}
        ></i>
      </button>
    </div>
  );
}
