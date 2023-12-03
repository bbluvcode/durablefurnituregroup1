import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ProductBodyElement from "./ProductBodyElement";
import ProductItemMainpage from "../pages_binh/components/ProductItemMainpage";
function Brand({ products }) {
    console.log(products);
    const navigate = useNavigate();


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
    const brandName = ["Ashley", "Aaron", "Dunelm Group", "French Heritage", "Forma Ideale", "Row"];
    return (
        <div>
            {brandName.map(brand => (
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className='text-bold'> {brand}</h3>
                        </div>
                        <Slider className="col-md-12" {...settings}>
                        
                            {products.filter(function (product) { return product.brand === brand }).map(
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

            ))}

        </div>
    );
}

export default Brand;