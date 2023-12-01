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
        <div className="row">
          <p className="col-md-4 h3">BAB COMPANY INFORMATION</p>
          <p className="col-md-4 h3 text-center">⚐ LOCATION</p>
          <p className="col-md-4 h3">✉ CONTACT US</p>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <div className="row">
              <p className="h5">DURABLE FURNITURE</p>
              <p className="h5 mt-2">Tax Code: 4601612075</p>
              <p className="h5 mt-2">Business Code: 41O8036796</p>

            </div>
          </div>
          <div className="col-md-4 text-center">
            <iframe
              className="d-inline-block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2738625664215!2d106.66307250000001!3d10.7903245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecd3866aabb%3A0x3e8d110dcb80b5c!2zNTkwIEPDoWNoIE3huqFuZyBUaMOhbmcgOCwgUGjGsOG7nW5nIDUsIFpom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1699963011898!5m2!1svi!2s"
              title="Map Google"
              width="80%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
          <div className="col-md-4 ps-3" >
            <div className="row">

              <a href="mailto:durablefurnitures2023@gmail.com" className="d-block text-decoration-none h5">Email: durablefurnitures2023@gmail.com</a>
              <a className=" d-block text-decoration-none text-dark h5 mt-2" href="tel:+840939966602">
                Hotline: 09.xxx.xxxx
              </a>
              <p className=" h5 mt-2">Thanks for visiting</p>
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
          <p className="col-md-5">
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
