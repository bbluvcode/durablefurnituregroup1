import { useEffect } from "react";
import { Alert, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductItem from "./components/ProductItem";

export default function ProductSearch(props) {
  const { dataProductSearch } = useSelector((state) => state.shopReducer);

  useEffect(() => {
    console.log(dataProductSearch);
  }, []);
  return (
    <div className="container">
      <div className="row py-10">
        <div className="col-md-12">
          <h2 className="underLine">
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
                    return (
                      <div
                        className="col-6 col-lg-3 col-md-3 productitem-cart"
                      >
                        <ProductItem product={product} />
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
