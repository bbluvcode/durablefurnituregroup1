import { NavLink } from "react-router-dom";
import CompareSearch from "./CompareSearch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  changeProductToCompare2,
} from "../redux/reducers/shopReducer";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function CompareItem2(props) {
  const { compareitem2 } = useSelector((state) => state.shopReducer);
  const [selectedProduct, setSelectedProduct] = useState(compareitem2);
  const [showCompareSearch, setShowCompareSearch] = useState(false);

  const handleSearchClick = () => {
    setShowCompareSearch(true);
  };
  const handleCloseCompareSearch = () => {
    setShowCompareSearch(false);
  };
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShowCompareSearch(false); //Đóng modal sau khi chọn sản phẩm
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedProduct(compareitem2);
  }, [compareitem2]);

  return (
    <div>
      <div className="card text-start compare-product-right">
        <h5 className="card-title text-center mt-2">
          {selectedProduct ? selectedProduct.name : "..."}
        </h5>
        <div className="img-compare">
          <NavLink className="img-compare">
            <img
              onClick={handleSearchClick}
              className="card-img-top compare_img"
              src={
                selectedProduct
                  ? selectedProduct.image
                  : "./img/logo/addproduct.png"
              }
              alt={
                selectedProduct ? selectedProduct.name : "No product selected"
              }
            />
          </NavLink>
        </div>
        <div className="card-body">
          <p className="card-text">
            Brandname: {selectedProduct ? selectedProduct.brand : "..."}
          </p>
          <p className="card-text">
            Material: {selectedProduct ? selectedProduct.material : "..."}
          </p>
          <p className="card-text">
            Size: {selectedProduct ? selectedProduct.size : "..."}
          </p>
          <p className="card-text bold">
            Price: {selectedProduct ? `${selectedProduct.price}$` : "..."}
          </p>
          <div
            className="button-of-compare-item d-flex mt-3 mb-1"
            onClick={() => {
              dispatch(changeProductToCompare2());
            }}
          >
            <button className="btn btn-outline-dark mx-1 w-50">
              <i class="fa fa-exchange-alt me-1"></i>
              <span className="span_binh">Change product</span>
            </button>
            <button
              className="btn btn-dark w-50"
              onClick={() => {
                if (selectedProduct) {
                  const productCart = { ...selectedProduct, quantityInCart: 1 };
                  const action = addToCartAction(productCart);
                  dispatch(action);
                  alertify.success("Added to cart successfully!");
                } else {
                  if (
                    window.confirm("Please select a product for comparison.")
                  ) {
                    handleSearchClick();
                  } else {
                    window.close();
                  }
                }
              }}
            >
              <i className="fa fa-cart-plus mx-1"></i>{" "}
              <span className="span_binh">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <CompareSearch
        show={showCompareSearch}
        handleClose={handleCloseCompareSearch}
        handleProductSelect={handleProductSelect}
      />
    </div>
  );
}
export default CompareItem2;
