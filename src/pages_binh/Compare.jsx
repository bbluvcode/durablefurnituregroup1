import ScrollToTop from "../pages_bao/ScrollToTop";
import CompareItem from "./CompareItem";
import CompareItem2 from "./CompareItem2";
import RelatedProduct from "./components/RelatedProduct";
import CompareItem3 from "./CompareItem3";

function Compare() {
  return (
    <div>
      <div className="container h-75 comparepage">
        <div className="row">
          <div className="col compare-item">
            <CompareItem />
          </div>
          {/* <div className="col-1 text-center compare-icon iconcompare">
                        <i class="fab fa-xing" style={{ 'fontSize': '1em' }}></i>
                    </div> */}
          <div className="col compare-item">
            <CompareItem2 />
          </div>
          {/* <div className="col-1 text-center compare-icon iconcompare">
                        <i class="fab fa-xing" style={{ 'fontSize': '1em' }}></i>
                    </div> */}
          <div className="col compare-item">
            <CompareItem3 />
          </div>
        </div>
      </div>
      <RelatedProduct />
      <ScrollToTop />
    </div>
  );
}

export default Compare;
