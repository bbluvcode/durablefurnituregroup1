import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import { useNavigate } from "react-router-dom";
import React from "react";

import Slider from "react-slick";
import ProductItemMainpage from "../pages_binh/components/ProductItemMainpage";
import BannerHome from "./BannerHome";

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
        <div className="home-page container-fluid mx-0 px-0 mt-0">
            <BannerHome />
            {/* BEGIN BANNER SECTION */}
            {/* <div className="mb-4 pb-5 banner mx-0 px-0">
                <div className="banner-home">
                    <img style={{ width: "100%" }} src="img/logo/Banner_home.png" alt="" />
                </div>
            </div> */}
            {/* END BANNER */}

            {/* BEGIN NEW PRODUCT CAROUSEL */}
            <div className="container mb-5 pb-5 border-bottom">
                <div className="row pb-3">
                    <div className="col-md-12 my-3">
                        <h3 className='text-bold text-center title-home-binh'> NEW PRODUCT</h3>
                    </div>
                    <Slider className="col-md-12" {...settings}>
                        {products.filter(function (product) { return product.isNew === true }).map(
                            product => {
                                return (
                                    <div
                                        className="col-6 col-lg-3 col-md-3 productitem-cart"
                                        key={product.pid}
                                    >
                                        <ProductItemMainpage product={product} />
                                    </div>
                                );
                            }
                        )}

                    </Slider>

                </div>

            </div>
            {/* END NEW PRODUCT CAROUSEL */}


            <div className="container-fluid mb-4  border-bottom">

                {/* BEGIN ROOMIMGLINK */}
                <div className="row border-bottom">
                    <div className="col-md-12">
                        <h3 className="text-center my-4 title-home-binh" > ROOM </h3>
                        <div className="underLineNoAfter"></div>
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
                <div className="container">


                    <div className="row mt-5 border-bottom best-seller">
                        <div className="col-md-12 pt-3">
                            <h3 className='text-bold text-center title-home-binh'> BEST SELLER </h3>
                            <div className="row no-gutter">
                                {products.filter(function (product) { return product.isBest === true }).map(
                                    product => {
                                        return (
                                            <div
                                                className="col-6 col-md-4 col-lg-3 col-md-3 productitem-cart"
                                                key={product.pid}
                                            >
                                                <ProductItemMainpage product={product} />
                                            </div>
                                        );
                                    }
                                )}

                            </div>
                        </div>
                    </div></div>

                {/* END BEST SELLER */}

            </div>

            {/* BEGIN INSPIRATION CORNER */}

            <div className="container my-5">
                <div className="row my-5">
                    <div className="col-md-12 text-center title-home-binh">
                        <h3> INSPIRATION CORNER </h3>
                    </div>
                </div>
                <Slider className="col-md-12 row text-center" {...setting1s}>
                    <button className="col-md-6 h-100 border-0"
                        onClick={() => navigate('inspiration4')}>
                        <img src="img/logo/post1.jpg" alt="" className="img-post" />
                        <h3 className="post-title my-3">
                            Create a quality dining room with 5 simple ways
                        </h3>
                        <p className="post-desc">
                            The dining room is the connection and relaxation space of every family, where [...]
                        </p>
                    </button>
                    <button className="col-md-6 h-100 border-0"
                        onClick={() => navigate("inspiration2")}>
                        <img src="img/img_product/img2.png" className="img-post" alt="" />
                        <h3 className="post-title my-3">
                            HOW TO CHOOSE DECORATIVE LIGHTS


                        </h3>
                        <p className="post-desc">
                            Whether it's the living room, bedroom, dining room or office, decorative lights [...]
                        </p>
                    </button>
                    <button className="col-md-6 h-100 border-0"
                        onClick={() => navigate('inspiration3')}>
                        <img src="img/img_product/img3.1.png" className="img-post" alt="" />
                        <h3 className="post-title my-3">

                            THE ART OF CHOOSING DECORATIVE LIGHTS FOR MODERN SPACES
                        </h3>
                        <p className="post-desc">
                            Decorative lights are not only a source of light for the home, but also [...]
                        </p>
                    </button>
                </Slider>
            </div>
            {/* BEGIN BRAND SECTION */}
            <div className="container brand-section mb-4 border-bottom">
                <div className="row ">
                    <div className="col-md-12">
                        <h3 className="text-center title-home-binh"> BRAND </h3>
                    </div>
                </div>
                <div className="row p-3 row-list">

                    <button className="col-6 col-md-4 btn"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Ashley" } })}>
                        <img src="./img/logo/ashley.png" className="logo-brand" alt="ashley.jpg" />
                    </button >

                    <button className="col-6 col-md-4 btn"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Aaron" } })}>
                        <img src="./img/logo/Aarons.png" className="logo-brand" alt="Aarons.jpg" />
                    </button>
                    <button className="col-6 col-md-4 btn"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Dunelm Group" } })}
                    >
                        <img src="./img/logo/Dunelm.png" className="logo-brand" alt="dunelm" />
                    </button>
                    <button className="col-6 col-md-4 btn"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Forma Ideale" } })}>
                        <img src="./img/logo/Formaldeale.gif" className="logo-brand" alt="formaIdeale.jpg" />
                    </button >
                    <button className="col-6 col-md-4 btn"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "French Heritage" } })}>
                        <img src="./img/logo/French Heritage.jpg" className="logo-brand" alt="frenchHeritage.jpg" />
                    </button>
                    <button className="col-6 col-md-4  btn"
                        onClick={() => navigate(`/filterBrand`, { state: { key: "Row" } })}>
                        <img src="./img/logo/Row.jpg" className="logo-brand" alt="row.jpg" />
                    </button>
                </div>
                {/* responsive ok */}

            </div>
            {/* END BRAND SECTION */}

        </div>

    )
}

export default Home;
