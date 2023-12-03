import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ProductBodyElement from "../pages_bao/ProductBodyElement";
import { useNavigate } from "react-router-dom";
import ProductItemMainpage from "../pages_binh/components/ProductItemMainpage";
function Room({ products }) {
    console.log(products);
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
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
    const rooms = ["BedRoom", "LivingRoom", "KidRoom", "WorkRoom", "BathRoom", "DiningRoom"];
    return (
        <div>
            {rooms.map(room => (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className='text-bold'> {room}</h3>
                        </div>
                        <Slider className="col-md-12" {...settings}>
                            {products.filter((product) => product.room === room)
                                .map(product => (
                                    <div
                                    className="col-6 col-lg-4 col-md-3 productitem-cart"
                                    key={product.pid}
                                >
                                    <ProductItemMainpage product={product} />
                                </div>
        


                                ))}

                        </Slider>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default Room;