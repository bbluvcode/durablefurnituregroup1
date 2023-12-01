import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ProductBodyElement from "./ProductBodyElement";
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
                            {products.filter((product) => product.brand === brand)
                                .map(product => (
                                    <div className="col-md-3 mb-3 p-3 product-item">

                                        <button className="row product-img"
                                            onClick={() => navigate("/product-detail", { state: { key: product.name } })}>
                                            <img className="col-md-12 img-thumbnail w-100 h-100" src={product.image} alt="" />
                                        </button>
                                        <div className="row product-name py-3 text-center">
                                            <a className="col-md-12 product-link"
                                                onClick={() => navigate("/product-detail", { state: { key: product.name } })}> {product.name}</a>
                                        </div>
                                        <ProductBodyElement product={product}/>
                                     
                                        <div className="row product-btn p-3">

                                            <ButtonsProductPage product={product} />


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

export default Brand;