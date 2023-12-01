import WishListItem from "../pages_binh/WishListItem";

function ProductBodyElement({ product }) {
  return (
    <div className="row">
      {/* <div className="col-md-12 product-material mb-3">
                Material: {product.material}
            </div> */}
      <div className="col-md-10 product-brand">Brand: {product.brand}</div>
      {/* <button className="col-md-2 btn">
                <i class="fa-regular fa-heart d-block pe-5"></i>
            </button> */}

      <WishListItem product={product} />
      <div className="col-md-10 product-price text-left">
        {product.discount > 0 ? (
          <del className="text-muted">{product.price}$</del>
        ) : (
          <span>{product.price}$</span>
        )}
      </div>
      <div className="col-md-2 text-center p-0">
        <span className="badge bg-danger p-2">
          {product.discount > 0 ? `-${product.discount}%` : null}
        </span>
      </div>
      <div className="col-md-12 product-price">
        {product.discount > 0 ? (
          <span>
            {Math.round(
              product.price - (product.discount * product.price) / 100
            )}
            $
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default ProductBodyElement;
