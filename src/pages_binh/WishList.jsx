import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductItem from "./components/ProductItem";

export default function WishList(props) {
  const { wishList } = props;

  // useEffect(() => {
  //   console.log(wishList);
  // }, [wishList]);
  return (
    <div className="container">
      <div className="row py-10">
        <div className="col-md-12">
          <h2 className="underLine">
            Your Wish List <b></b>
          </h2>
          <div>
            <div className="carousel-inner">
              <div className="item">
                <div className="row">
                  {wishList.length === 0 ? (
                    <Alert variant="danger" className="mt-3">
                      Product not found. Please try again later.
                    </Alert>
                  ) : (
                    wishList.map((product, index) => {
                      return (
                        <div
                          className="col-6 col-lg-3 col-md-3 productitem-cart"
                          key={product.pid}
                        >
                          <ProductItem product={product} />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
