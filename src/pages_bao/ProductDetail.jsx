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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./ProductDetail.css"
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ButonsProductDetailPage from "../pages_binh/button/ButonsProductDetailPage";
import ProductBodyElement from "./ProductBodyElement";
import Typography from '@mui/material/Typography';
function ProductDetail({ products }) {
  let location = useLocation();
  let name = location.state.key;

  console.log(products);

  const navigate = useNavigate();
  const productArr = products.filter((product) => product.name === name);
  console.log(productArr);

  let reviewArr = productArr[0].review;
  console.log(reviewArr);



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

  const id = productArr[0].id;


  const [value, setValue] = useState(5);
  // const [hover, setHover] = useState(-1);

  const [comment, setComment] = useState("");

  var isLogin = sessionStorage.getItem("islogin");
  console.log(isLogin);
  var username = sessionStorage.getItem("username");
  console.log(username);

  const handleComment = (e) => {
    e.preventDefault();

    let sendingTime = new Date();
    let time = sendingTime.toString();
    const userComment = {
      user: username, comment: comment, star: value, time: time
    }
    console.log(userComment);
    fetch(`https://6558bb31e93ca47020a9a821.mockapi.io/products/:${id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ review: reviewArr.push(userComment) })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You have successfully rated this product.Thank you!",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(error => {
      // handle error
    })


  }
  return (
    <div className="my-5">
      {productArr.map((product) => (
        <div className="container">
          <div className="row">
            {/* BEGIN IMAGE PRODUCT - LEFT */}
            <div className="col-md-8 product-review-left">
              <div className="row image">
                <div className="row img-product mb-4">
                  <div className="col-md-12 g-0 img-display">
                    <img src={imgUrl === "" ? product.image : imgUrl} alt="" />
                  </div>
                </div>
                <div className="row img-product-thumbnail">
                  <button
                    className="col-md-4 me-3"
                    onClick={() => setImgUrl(product["image-detail"])}
                  >
                    <img
                      src={product["image-detail"]}
                      className="w-100 h-100"
                      alt=""
                    />
                  </button>
                  <button
                    className="col-md-4"
                    onClick={() => setImgUrl(product.image)}
                  >
                    <img
                      src={product.image}
                      className="w-100 h-100"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="row mt-5 product-review pb-4">
                <h3>PRODUCT REVIEW</h3>

                {/* BEGIN REVIEW PRODUCT BY USER */}


                <div className="row">
                  {reviewArr.map((review) => (
                    <div className="col-md-12">
                      <div className="row mb-3">
                        <div className="col-md-3">
                          <div className="col-md-12"> {review.user} </div>
                          <div className="col-md-12"> {review.time} </div>
                        </div>
                        <div className="col-md-9">
                          <Rating name="read-only" value={review.star} readOnly />
                          <Typography component="legend">
                            {review.comment}
                          </Typography>

                        </div>



                      </div>
                    </div>

                  )
                  )}


                </div>
                {/* BEGIN RATING  */}

                <h4 className="mt-3">Please rate the product at here</h4>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component="legend">Controlled</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}

                  />
                </Box>
                <form action="" onSubmit={(e) => handleComment(e)}>
                  <div className="row">
                    <input type="text"
                      name="commentUser"
                      id="commentUser"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Comment"
                    />
                    <button className="col-md-3" type="submit">Send</button>
                  </div>


                </form>


                {/* END RATING */}
              </div>
            </div>

            {/* BEGIN INFO PRODUCT - RIGHT */}
            <div className="col-md-4 product-detail-right">
              <div className="row">
                <h4 className="mb-4 text-center"> {product.name} </h4>
                <p className="mb-3">

                  <span>Price: </span>
                  <span className="font-bold fw-bold">
                    {product.price}$
                  </span>
                </p>
                <p className="mb-3 col-md-12">
                  <span>Brand: </span>
                  <span>{product.brand}</span>
                </p>
                <p className="mb-3 col-md-12">
                  <span>Room: </span>
                  <span>{product.room}</span>
                </p>

                <h4> Product description:</h4>


                <div>
                  {product.description.slice(0, 250)}
                </div>
                <a
                  href={product["path-doc"]}
                  className="my-3 btn btn-info"
                  target="blank"
                >
                  <i class="fa-solid fa-file-arrow-down"></i>
                  Download detail feature
                </a>

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
                        {/* {item.name} */}
                      </a>
                    </div>
                    <ProductBodyElement product={product} />
                    <div className="row product-btn p-3">
                      <ButtonsProductPage product={product} />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default ProductDetail;
