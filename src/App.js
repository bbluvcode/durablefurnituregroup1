import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "./pages_binh/Binh.css";
import { Routes, Route } from "react-router-dom";
import ShopingCart from "./pages_binh/ShopingCart";
import Contact from "./pages_binh/Contact";
import Compare from "./pages_binh/Compare";
import Header from "./pages_binh/Header";
import ProductSearch from "./pages_binh/ProductSearch";

import { useState, useEffect } from "react";
import Home from "./pages_bao/Home";
import Product from "./pages_bao/Product";
import FilterBrand from "./pages_bao/FilterBrand.jsx";
import FilterRoom from "./pages_bao/FilterRoom.jsx";
import Footer from "./pages_kanh/Footer";
import Brand from "./pages_bao/Brand";
import ProductDetail from "./pages_bao/ProductDetail.jsx";
import Room from "./pages_kanh/Room";
import ScrollToTop from "./pages_bao/ScrollToTop.jsx";
import Register from "./pages_bao/Register.jsx";
import Login from "./pages_bao/Login.jsx";
import Confirm from "./pages_binh/components/Confirm.jsx";
import { useSelector } from "react-redux";
import WishList from "./pages_binh/WishList.jsx";
import Inspiration1 from "./pages_kanh/Inspiration1";
import Inspiration2 from "./pages_kanh/Inspiration2";
import Inspiration3 from "./pages_kanh/Inspiration3";
import Inspiration from "./pages_kanh/Inspiration.jsx";
import Inspiration4 from "./pages_kanh/Inspiration4.jsx";
import CheckOut from "./pages_binh/CheckOut.jsx";
import CheckOutSuccess from "./pages_binh/CheckOutSuccess.jsx";
import RelatedProduct from "./pages_binh/components/RelatedProduct.jsx";

function App() {
  const linkHome = "/";
  const linkProduct = "/product";
  const linkBrandname = "/brand";
  const linkRoom = "/room";
  const linkShopingcart = "/shopingcart";
  const linkContact = "/contact";
  const linkCompare = "/compare";
  const linkFilterBrand = "/filterBrand";
  const linkFilterRoom = "/filterRoom";
  const linkProductDetail = "/product/:id";
  const linkInspiration = "/blog";
  const linkInspiration1 = "/inspiration1";
  const linkInspiration2 = "/inspiration2";
  const linkInspiration3 = "/inspiration3";
  const linkInspiration4 = "/inspiration4";

  const [products, setProducts] = useState([]);
  
  const [review, setReview] = useState([]);
  
  useEffect(() => {
    fetch("https://6558bb31e93ca47020a9a821.mockapi.io/products")
      .then((data) => data.json())
      .then((dataList) => setProducts(dataList));
  
  }, []);
  console.log(review);


  console.log(products);

  const { shopingcart } = useSelector((state) => state.shopReducer);
  const { wishList } = useSelector((state) => state.shopReducer);

  return (
    <div className="App ">
      <Header link={linkContact} shopingcart={shopingcart} />
      <Routes>
        <Route path={linkHome} element={<Home products={products} />}></Route>
        <Route path="*" element={<Home products={products} />}></Route>
        <Route
          path={linkProduct}
          element={<Product products={products} />}
        ></Route>
        <Route
          path={linkBrandname}
          element={<Brand products={products} />}
        ></Route>
        <Route
          path={linkProductDetail}
          element={<ProductDetail products={products} />}
        ></Route>
        <Route
          path={linkFilterBrand}
          element={<FilterBrand products={products} />}
        />
        <Route
          path={linkFilterRoom}
          element={<FilterRoom products={products} />}
        />
        <Route path={linkRoom} element={<Room products={products} />}></Route>
        <Route
          path={linkShopingcart}
          element={<ShopingCart shopingcart={shopingcart} />}
        />
        <Route path={linkContact} element={<Contact />} />
        <Route path={linkCompare} element={<Compare />} />
        <Route path="/productsearch" element={<ProductSearch />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/productsearch" element={<ProductSearch />} />
        {/* <Route path="/register" element={<Register users={users} />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList wishList={wishList} />} />
        <Route path="/youmayalsolike" element={<RelatedProduct wishList={wishList} />} />

        <Route path={linkInspiration} element={<Inspiration />} />
        <Route path={linkInspiration1} element={<Inspiration1 />} />
        <Route path={linkInspiration2} element={<Inspiration2 />} />
        <Route path={linkInspiration3} element={<Inspiration3 />} />
        <Route path={linkInspiration4} element={<Inspiration4 />} />

        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkoutsuccess" element={<CheckOutSuccess />} />

      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
