
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFilter } from '@fortawesome/free-solid-svg-icons'
// 
import "./Product.css"
import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";
import ProductItemMainpage from "../pages_binh/components/ProductItemMainpage";
// import { current } from "@reduxjs/toolkit";
function Product({ products }) {
    // console.log(products.slice(0, 12));
    const navigate = useNavigate();

    // BEGIN CONFIG PAGINATION

    const items1 = products.filter(item => item.discount > 0);
    const items2 = products.filter(item => item.discount === 0);
    const items = [...items1, ...items2];
    console.log(items);

    function Items({ currentItems }) {
        return (
            <div className="row">
                {currentItems &&
                    currentItems.map((product) => (

                        <div
                            className="col-6 col-lg-4 col-md-4 productitem-cart"
                            key={product.pid}
                        >
                            <ProductItemMainpage product={product} />
                        </div>


                    ))}


            </div>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);


        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );

            setItemOffset(newOffset);
            window.scrollTo(0, 0);

        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    // breakLabel="..."
                    // nextLabel=">>"
                    // onPageChange={handlePageClick}
                    // pageRangeDisplayed={5}
                    // pageCount={pageCount}
                    // previousLabel="<<"
                    // renderOnZeroPageCount={null}
                    // containerClassName="pagination-product"
                    // pageClassName="pagination-item"
                    // activeClassName="pagination-active"
                    // pageLinkClassName="pagination-link"
                    // activeLinkClassName="pagination-link-active"
                    // previousClassName="previous"
                    // nextClassName="next"
                    previousLabel={'«'}
                    nextLabel={'»'}
                    pageCount={pageCount}
                    marginPagesDisplayed={5}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination pagination-product mt-5'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </>
        )
    }
    // END CONFIG PAGINATION

    return (
        <div className="container mb-3">
            <div className="row">
                <h1 className="text-center border-bottom py-3"> ALL PRODUCT </h1>
            </div>
            <div className="row">

                {/* BEGIN SIDEBAR LEFT FILTER  */}
                <div className="col-md-3 sidebar">
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

                    <div className="col-md-12 text-center">
                        <PaginatedItems itemsPerPage={9} />

                    </div>



                </div>



            </div>
        </div>


    );
}

export default Product;