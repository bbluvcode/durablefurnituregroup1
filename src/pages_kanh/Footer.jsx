import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink, useNavigate } from "react-router-dom";
import "./Footer.css"
function Footer() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // pauseOnHover: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <footer className="footer mt-5">
      <div className="container pt-3">
        <div className="row text-style">
          <p className="col-md-4">BAB COMPANY INFORMATION</p>
          <p className="col-md-4 text-center"><i class="fa fa-map-marker-alt" style={{ "fontSize": "0.7em" }}></i> LOCATION</p>
          <p className="col-md-4">✉ CONTACT US</p>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <div className="row text-style-second">
              <p className="h5">DURABLE FURNITURE</p>
              <p className="h5">Tax Code: 4601612075</p>
              <p className="h5">Business Code: 41O8036796</p>

            </div>
          </div>
          <div className="col-md-4 text-center">
            <iframe
              className="d-inline-block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.325316305318!2d106.66372207495763!3d10.786376989362955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1701420295886!5m2!1svi!2sus"
              title="Map Google"
              width="65%"
              height="80%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
          <div className="col-md-4 ps-3" >
            <div className="row text-style-second">
              <a href="mailto:durablefurnitures2023@gmail.com" className="d-block text-decoration-none h5">Email: durablefurnitures2023@gmail.com</a>
              <a className=" d-block text-decoration-none text-dark h5" href="tel:+840939966602">
                Hotline: +840939966602
              </a>
              <p className=" h5">Thanks for visiting</p>
            </div>
          </div>
        </div>


        <Slider className="slide-footer" {...settings}>

          <button className="slide-footer-item border-0 "
            onClick={() => navigate("/filterBrand", { state: { key: "Ashley" } })}>
            <img className="img-thumbnail w-100 h-100" src="img/logo/ashley.png" alt="Ashley" />
          </button>
          <button className="slide-footer-item border-0 "
            onClick={() => navigate("/filterBrand", { state: { key: "Aarons" } })}>
            <img className="img-thumbnail w-100 h-100" src="img/logo/Aarons.png" alt="Aaron" />
          </button>
          <button className="slide-footer-item border-0 "
            onClick={() => navigate("/filterBrand", { state: { key: "Dunelm Group" } })}>
            <img className="img-thumbnail w-100 h-100" src="img/logo/Dunelm.png" alt="Dunelm" />
          </button>
          <button className="slide-footer-item border-0 "
            onClick={() => navigate("/filterBrand", { state: { key: "Forma Ideale" } })}>
            <img className="img-thumbnail w-100 h-100" src="img/logo/Formaldeale.gif" alt="Formaldeale.gif" />
          </button>
          <button className="slide-footer-item border-0 "
            onClick={() => navigate("/filterBrand", { state: { key: "French Heritage" } })}>
            <img className="img-thumbnail w-100 h-100" src="img/logo/French Heritage.jpg" alt="French Heritage" />
          </button>

          <button className="slide-footer-item border-0 "
            onClick={() => navigate("/filterBrand", { state: { key: "Row" } })}>
            <img className="img-thumbnail w-100 h-100" src="img/logo/Row.jpg" alt="Row" />
          </button>

        </Slider>
        <div className="row mt-4">
          <p className="col-md-12">
            &copy; Copyright of Durable Furniture - a brand belonging to BAB Furniture
            Since 2023 - registered trademark number 979605 Intellectual Property Department
          </p>
          <div className="col-md-4 invisible">Hidden</div>
          <div className="col-md-3 text-end">
            <img src="img/logo/copyright.png" className="d-inline-block pe-3" alt="" />
          </div>
        </div>

      </div>



    </footer>

  );
}
export default Footer;
