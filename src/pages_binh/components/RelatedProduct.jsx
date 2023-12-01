import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { getAllProductApi } from "../../redux/reducers/shopReducer";
import ReactPaginate from "react-paginate";

function RelatedProduct(props) {
  const { dataProduct } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsApi = getAllProductApi();
    dispatch(getProductsApi);
  }, []);

  // test----------------------------------------------------------------

  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 8;
  const pageCount = Math.ceil(dataProduct.length / productsPerPage);

  // Hàm này sẽ được gọi mỗi khi currentPage thay đổi
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = dataProduct.slice(startIndex, endIndex);
  // -----------------------test-------------------------

  return (
    <div className="container">
      <p className="related_title">YOU MAY ALSO LIKE</p>
      <div className="row product-desktop">
        {currentProducts.map((product) => {
          return (
            <div
              className="col-6 col-lg-3 col-md-3 productitem-cart"
              key={product.pid}
            >
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
      <div className="pagination-outer">
        <ReactPaginate
          previousLabel={"«"}
          nextLabel={"»"}
          pageCount={pageCount}
          marginPagesDisplayed={5}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination pagination-outer mt-5"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          onClick={() => {
            window.scrollTo(200, 350);
          }}
        />
      </div>
      <div className="row product-mobile">
        {dataProduct.map((product) => {
          return (
            <div
              className="col-6 col-lg-3 col-md-3 productitem-cart"
              key={product.pid}
            >
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
