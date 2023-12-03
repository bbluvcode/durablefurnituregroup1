// import { useNavigate, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import { Route, useNavigate } from "react-router-dom";
import React from "react";

import Slider from "react-slick";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ProductBodyElement from "./ProductBodyElement";

function Home({ products }) {
    const navigate = useNavigate();
    console.log(products);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
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

    const setting1s = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
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
        <div>

            <div className="container-fluid mb-4">
                {/* BEGIN BANNER SECTION */}
                <div className="row">
                    <div className="col-md-12 gx-0 banner-home">
                        <img src="img/logo/Banner_home.png" alt="" />
                    </div>
                </div>
            </div>
            {/* END BANNER */}
            <div className="container mb-4">

                {/* BEGIN ROOMIMGLINK */}
                <div className="row">
                    <div className="col-md-12">
                        <h3> ROOM </h3>
                    </div>
                    <div className="col-md-12 mt-3 room-group">
                        <div className="row w-100">
                            <button className="col-md-6 room-btn border-0 "
                                onClick={() => navigate(`/filterRoom`, { state: { key: "LivingRoom" } })}>
                                <img src="img/logo/livingroom.png" alt="" className='h-100 w-100' />


                            </button>
                            <button className="col-md-3 room-btn border-0"
                                onClick={() => navigate(`/filterRoom`, { state: { key: "BedRoom" } })}>
                                <img src="img/logo/bedroom.png" alt="" className='h-100 w-100' />


                            </button>
                            <button className="col-md-3 room-btn border-0 p-0"
                                onClick={() => navigate(`/filterRoom`, { state: { key: "KidRoom" } })}>
                                <img src="img/logo/Kidroom.png" alt="" className='h-100 w-100' />
                            </button>
                        </div>
                        <div className="row mt-3 w-100">
                            <button className="col-md-3 room-btn border-0"
                                onClick={() => navigate(`/filterRoom`, { state: { key: "WorkRoom" } })}>
                                <img src="img/logo/workroom.png" alt="" className='h-100  w-100' />


                            </button>
                            <button className="col-md-6 room-btn border-0"
                                onClick={() => navigate(`/filterRoom`, { state: { key: "DiningRoom" } })}>
                                <img src="img/logo/dining.png" alt="" className='h-100 w-100' />


                            </button>
                            <button className="col-md-3 room-btn border-0 p-0"
                                onClick={() => navigate(`/filterRoom`, { state: { key: "BathRoom" } })}>
                                <img src="img/logo/bathroom.png" alt="" className='h-100 w-100' />


                            </button>
                        </div>
                    </div>
                </div>

                {/* END ROOMIMGLINK */}

                {/* BEGIN BEST SELLER */}
                <div className="row mt-5">
                    <div className="col-md-12 pt-3">
                        <h3 className='text-bold'> BEST SELLER </h3>
                        <div className="row no-gutter">
                            {products.filter(function (product) { return product.isBest === true }).map((product) => (
                                <div className="col-md-3 mb-3 p-3 product-item">
                                    <div className="best-sell wrap-badgebyme">
                                        <div className="badgebyme w-100 h-100">
                                            <img src="img/logo/badge.png" alt="" className="w-100 h-100" />
                                            <span className="new-badge"> BEST SELL </span>
                                        </div>

                                    </div>


                                    <button className="row product-img border-0"
                                        onClick={() => navigate("/product-detail", { state: { key: product.name } })}>
                                        <img className="col-md-12 img-thumbnail w-100 h-100" src={product.image} alt={product.name} />
                                    </button>
                                    <div className="row product-name py-3 text-center">
                                        <a className="col-md-12 product-link"
                                            onClick={() => navigate("/product-detail", { state: { key: product.name } })}
                                        > {product.name}</a>
                                    </div>
                                    <ProductBodyElement product={product} />
                                    <div className="row product-btn p-3">

                                        <ButtonsProductPage product={product} />
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>

                {/* END BEST SELLER */}

            </div>
            {/* BEGIN NEW PRODUCT CAROUSEL */}
            <div className="container mb-4">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-bold'> NEW PRODUCT</h3>
                    </div>
                    <Slider className="col-md-12" {...settings}>
                        {products.filter((product) => product.isNew === true)
                            .map(product => (
                                <div className="col-md-3 mb-3 p-3 product-item">
                                    <div className="new-product wrap-badgebyme">
                                        <div className="badgebyme w-100 h-100">
                                            <img src="img/logo/badge.png" alt="" className="w-100 h-100" />
                                            <span className="new-badge"> NEW </span>
                                        </div>

                                    </div>

                                    <button className="row product-img border-0"
                                        onClick={() => navigate("/product-detail", { state: { key: product.name } })}>
                                        <img className="col-md-12 img-thumbnail w-100 h-100" src={product.image} alt="" />
                                    </button>
                                    <div className="row product-name py-3 text-center">
                                        <a className="col-md-12 product-link"
                                            onClick={() => navigate("/product-detail", { state: { key: product.name } })}> {product.name}</a>
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
            {/* END NEW PRODUCT CAROUSEL */}

            {/* BEGIN BRAND SECTION */}
            <div className="container brand-section mb-4">
                <div className="row">
                    <div className="col-md-12 my-3">
                        <h3> BRAND </h3>
                    </div>
                </div>
                <div className="row py-5 row-list">

                    <button className="col-md-4 btn h-100"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Ashley" } })}>
                        <img src="./img/logo/ashley.png" className="h-100 w-100" alt="ashley.jpg" />
                    </button >

                    <button className="col-md-4 btn h-100"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Aaron" } })}>
                        <img src="./img/logo/Aarons.png" className="h-100 w-100" alt="Aarons.jpg" />
                    </button>
                    <button className="col-md-4 btn h-100"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Dunelm Group" } })}
                    >
                        <img src="./img/logo/Dunelm.png" className="h-100 w-100" alt="dunelm" />
                    </button>
                </div>
                <div className="row mt-5 row-list">
                    <button className="col-md-4 btn h-100"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Forma Ideale" } })}>
                        <img src="./img/logo/Formaldeale.gif" className="h-100 w-100" alt="formaIdeale.jpg" />
                    </button >
                    <button className="col-md-4 btn h-100"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "French Heritage" } })}>
                        <img src="./img/logo/French Heritage.jpg" className="h-100 w-100" alt="frenchHeritage.jpg" />
                    </button>
                    <button className="col-md-4 btn h-100"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Row" } })}>
                        <img src="./img/logo/Row.jpg" className="w-100 h-100" alt="row.jpg" />
                    </button>
                </div>

            </div>
            {/* END BRAND SECTION */}


            {/* BEGIN INSPIRATION CORNER */}

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3> INSPIRATION CORNER </h3>
                    </div>
                </div>
                <Slider className="col-md-12 row text-center" {...setting1s}>
                    <div className="col-md-6 h-100">
                        <img src="img/logo/post1.jpg" alt="" className="img-post" />
                        <h3 className="post-title my-3">
                            Create a quality dining room with 5 simple ways
                        </h3>
                        <p className="post-desc">
                            The dining room is the connection and relaxation space of every family, where [...]
                        </p>
                    </div>
                    <div className="col-md-6 h-100">
                        <img src="img/img_product/img2.png" className="img-post" alt="" />
                        <h3 className="post-title my-3">
                            HOW TO CHOOSE DECORATIVE LIGHTS


                        </h3>
                        <p className="post-desc">
                        Whether it's the living room, bedroom, dining room or office, decorative lights [...]
                        </p>
                    </div>
                    <div className="col-md-6 h-100">
                        <img src="img/img_product/img3.1.png" className="img-post" alt="" />
                        <h3 className="post-title my-3">

                        THE ART OF CHOOSING DECORATIVE LIGHTS FOR MODERN SPACES
                        </h3>
                        <p className="post-desc">
                        Decorative lights are not only a source of light for the home, but also [...]
                        </p>
                    </div>
                </Slider>
            </div>
        </div>

    )
}

export default Home;
