import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ButonsProductDetailPage from "../pages_binh/button/ButonsProductDetailPage";
import ProductBodyElement from "./ProductBodyElement";

function ProductDetail({ products }) {
  let location = useLocation();
  let name = location.state.key;

  console.log(products);

  const navigate = useNavigate();
  const productArr = products.filter((product) => product.name === name);
  console.log(productArr);

  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    setImgUrl("");
  }, [name]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [quantity, setQuantity] = useState(1);
  const labels = {
    0.5: "Very Bad",
    1: "Very Bad",
    1.5: "Very Bad",
    2: "Bad",
    2.5: "Bad",
    3: "Fine",
    3.5: "Fine",
    4: "Good",
    4.5: "Good",
    5: "Very Good",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="mb-5">
      {productArr.map((product) => (
        <div className="container">
          <div className="row">
            {/* BEGIN IMAGE PRODUCT - LEFT */}
            <div className="col-md-8">
              <div className="row image">
                <div className="row img-product mb-4">
                  <div className="col-md-12 g-0">
                    <img src={imgUrl === "" ? product.image : imgUrl} alt="" />
                  </div>
                </div>
                <div className="row img-product-thumbnail">
                  <button
                    className="col-md-4"
                    onClick={() => setImgUrl(product["image-detail"])}
                  >
                    <img
                      src={product["image-detail"]}
                      className="img-thumbnail w-100 h-100"
                      alt=""
                    />
                  </button>
                  <button
                    className="col-md-4"
                    onClick={() => setImgUrl(product.image)}
                  >
                    <img
                      src={product.image}
                      className="img-thumbnail w-100 h-100"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="row mt-5 product-review pb-4">
                <h3>PRODUCT REVIEW</h3>
                <div className="border">There are no reviews yet</div>
                {/* BEGIN RATING  */}
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="size-large"
                    value={value}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </Box>
                {/* END RATING */}
              </div>
            </div>

            {/* BEGIN INFO PRODUCT - RIGHT */}
            <div className="col-md-4">
              {/* <div className="row mb-4">
                <h2 className="text-center">INFO OF PRODUCT</h2>
              </div> */}
              <div className="row">
                <h4 className="mb-3"> {product.name} </h4>
                <p className="mb-3">
                  {" "}
                  Price:{" "}
                  <span className="font-bold fw-bold">
                    {product.price}$
                  </span>{" "}
                </p>
                <p className="mb-3"> Brand: {product.brand}</p>
                <p className="mb-3"> Room: {product.room}</p>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                >
                  Product description:
                </button>
                <div id="demo" class="collapse show">
                  {product.description}
                </div>
                <h5> </h5>
                <a
                  href={product["path-doc"]}
                  className="mb-3 btn btn-warning"
                  target="blank"
                >
                  <i class="fa-solid fa-file-arrow-down"></i>
                  Download detail feature
                </a>

                <h4> Quantity</h4>

                <div className="col-md-12 d-flex mb-5">
                  <button
                    className="btn btn-info"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <div className="p-3"> {quantity} </div>
                  <button
                    onClick={() =>
                      quantity > 0 ? setQuantity(quantity - 1) : false
                    }
                    className="btn btn-info"
                  >
                    {" "}
                    -
                  </button>
                </div>

                <ButonsProductDetailPage product={product} />
              </div>
            </div>
          </div>

          <div className="row ">
            <h3 className="text-center">YOU MAY ALSO LIKE</h3>

            <Slider className="col-md-12" {...settings}>
              {products
                .filter((item) => item.room === product.room)
                .map((item) => (
                  <div className="col-md-3 mb-3 p-3 product-item">
                    <button
                      className="row product-img"
                      onClick={() =>
                        navigate("/product-detail", {
                          state: { key: item.name },
                        })
                      }
                    >
                      <img
                        className="col-md-12 img-thumbnail w-100 h-100"
                        src={item.image}
                        alt=""
                      />
                    </button>
                    <div className="row product-name py-3 text-center">
                      <a
                        className="col-md-12 product-link"
                        onClick={() =>
                          navigate("/product-detail", {
                            state: { key: item.name },
                          })
                        }
                      >
                        {" "}
                        {item.name}
                      </a>
                    </div>
                    <ProductBodyElement product={product} />
                    <div className="row product-btn p-3">
                      <ButtonsProductPage />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
