import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ButtonsProductPage from "../pages_binh/button/ButtonsProductPage";
import ProductBodyElement from "./ProductBodyElement";
import ProductItemMainpage from "../pages_binh/components/ProductItemMainpage";
import DropdownFilter from "./DropdownFilter";
function FilterBrand({ products }) {

    console.log(products);
    const navigate = useNavigate();
    let location = useLocation();
    console.log(location);
    let brand = location.state.key;
    console.log(brand);
    useEffect(()=>{
        window.scrollTo(0,0);
    },[brand])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="text-center border-bottom py-3"> {brand} Products </h1>
                </div>
                <div className="row">
                <div class="btn-group d-md-none dropdown-filter fixed-top ">
                        <DropdownFilter/>
                    </div>

                    {/* BEGIN SIDEBAR LEFT FILTER  */}
                    <div className="col-md-3 sidebar d-none d-md-block">
                        <div className="row">
                            <h3 className="col-md-12">
                                <span className="mr-5">FILTER</span>   <i class="fa-solid fa-filter fa-beat fa-sm"></i>
                            </h3>
                        </div>
                        <div className="row mt-3">
                            <h4 className="col-md-12 mb-3">
                                BRAND
                            </h4>
                            <div className="col-md-12 my-2">
                                <button
                                    className="btn btn-dark"
                                    onClick={() => navigate(`/filterBrand`, { state: { key: "Ashley" } })}>Ashley</button>
                            </div>
                            <div className="col-md-12">

                                <button
                                    onClick={() => navigate(`/filterBrand`, { state: { key: "Aaron" } })}
                                    className="btn btn-dark ">Aaron</button>

                            </div>
                            <div className="col-md-12 my-2">
                                <button
                                    onClick={() => navigate(`/filterBrand`, { state: { key: "Dunelm Group" } })}
                                    className="btn btn-dark ">Dunelm Group</button>

                            </div>
                            <div className="col-md-12 my-2">
                                <button
                                    className="btn btn-dark "
                                    onClick={() => navigate(`/filterBrand`, { state: { key: "French Heritage" } })}
                                >French Heritage</button>


                            </div>
                            <div className="col-md-12 my-2">
                                <button className="btn btn-dark"
                                    onClick={() => navigate(`/filterBrand`, { state: { key: "Forma Ideale" } })}>Forma Ideale</button>


                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-dark"
                                    onClick={() => navigate(`/filterBrand`, { state: { key: "Row" } })}
                                > Row</button>



                            </div>

                        </div>

                        <div className="row mt-4">
                            <h4 className="col-md-12 mb-3">
                                ROOM
                            </h4>
                            <div className="col-md-12 my-2">
                                <button className="btn btn-dark "
                                    onClick={() => navigate(`/filterRoom`, { state: { key: "LivingRoom" } })}
                                >Living Room</button>
                            </div>
                            <div className="col-md-12">

                                <button className="btn btn-dark "
                                    onClick={() => navigate(`/filterRoom`, { state: { key: "WorkRoom" } })}>Work Room</button>

                            </div>
                            <div className="col-md-12 my-2">
                                <button className="btn btn-dark "
                                    onClick={() => navigate(`/filterRoom`, { state: { key: "KidRoom" } })}>Kid Room</button>

                            </div>
                            <div className="col-md-12 my-2">
                                <button className="btn btn-dark "
                                    onClick={() => navigate(`/filterRoom`, { state: { key: "DiningRoom" } })}>Dinner and kitchen</button>

                            </div>
                            <div className="col-md-12 my-2">
                                <button className="btn btn-dark "
                                    onClick={() => navigate(`/filterRoom`, { state: { key: "BedRoom" } })}>Bed Room</button>


                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-dark"
                                    onClick={() => navigate(`/filterRoom`, { state: { key: "BathRoom" } })} > Bath Room</button>



                            </div>

                        </div>

                    </div>



                    {/* END SIDEBAR LEFT FILTER */}

                    {/* BEGIN CONTENT - SHOW LIST PRODUCT  */}
                    <div className="col-md-9 content border">
                        <div className="row">
                            {products.filter(product => product.brand === brand)
                                .map(product => (
                                    <div
                                    className="col-6 col-lg-4 col-md-6 productitem-cart"
                                    key={product.pid}
                                >
                                    <ProductItemMainpage product={product} />
                                </div>
        

                                ))}


                        </div>



                    </div>



                </div>
            </div>


        </div>
    );
}

export default FilterBrand;