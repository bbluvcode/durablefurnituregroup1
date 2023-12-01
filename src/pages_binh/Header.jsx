import { NavLink, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getProductsSearchApiAction,
  updatenumberofproduct,
} from "../redux/reducers/shopReducer";
import axios from "axios";
import { useRef } from "react";
import { Alert } from "react-bootstrap";
import ShopingCart_icon from "./components/ShopingCart_icon";
import ShopingCart_icon_scrollheader from "./components/ShopingCart_icon_scrollheader";
import ShopingCart_float from "./components/ShopingCart_float";

function Header(props) {
  const { shopingcart } = props;
  const numberphone = " 09.xxx.xxx.xx";
  const linkProduct = "/product";
  const linkBrandname = "/brand";
  const linkRoom = "/room";
  const linkInspiration = "/inspiration";
  const linkContact = "/contact";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyRef = useRef("");

  const handleChange = (e) => {
    const { value } = e.target;
    searchKeyRef.current = value;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    setSearchParams({ keyword: searchKeyRef.current });
  };

  useEffect(() => {
    (async () => {
      let keyword = "";
      if (searchParams.get("keyword") != null) {
        keyword = searchParams.get("keyword");
      }
      if (keyword !== "") {
        try {
          const result = await axios({
            url:
              "https://653f52049e8bd3be29e0427e.mockapi.io/products?search=" +
              keyword,
            method: "GET",
          });
          dispatch(getProductsSearchApiAction(result.data));
          navigate("/productsearch");
        } catch (error) {
          <Alert variant="danger" className="mt-3">
            Not found product!
          </Alert>;
        }
      }
    })();
  }, [searchKeyRef.current]);

  const updateOrderSummary = () => {
    let count = 0;

    shopingcart.forEach((product) => {
      count += product.quantityInCart;
    });
    dispatch(updatenumberofproduct(count));
  };

  window.onscroll = function () {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("headerFixed").style.transform = "translate(0,0)";
    } else {
      document.getElementById("headerFixed").style.transform =
        "translate(0,-100%)";
    }
  };
  useEffect(() => {
    // setProductCount(numberofproduct);
    updateOrderSummary();
  }, [shopingcart]);

  return (
    <div className="">
      {/* ----------------------------topheader---------------------------------- */}
      <div className="header__top container-fluid d-flex justify-content-between text-white ">
        <div className="header__left ">
          <NavLink className="link text-white" to="tel:+840939966602">
            <i class="fa fa-phone-volume"></i>
            {numberphone}
          </NavLink>{" "}
          |{" "}
          <NavLink to={linkContact} className="link text-white">
            <i class="far fa-envelope"></i> Contact{" "}
          </NavLink>
        </div>
        <div className="header__right d-flex">
          <div className="ShopingCart-icon">
            {/* ---------------onHeadertop------------------ */}
            <NavLink to="/shopingcart" className="link text-white">
              <span className="me-2">
                <ShopingCart_icon />
              </span>
              <span className="title_headersmall me-1 ms-1">Shoping Cart</span>
            </NavLink>{" "}
            {/* ------------------basketFloat------------- */}
            <ShopingCart_float shopingcart={shopingcart} />
          </div>
          <div className="WishList-icon">
            <NavLink to={`/wishlist`} className="link text-white">
              <i className="fa fa-heart ms-1 me-1"></i>
              <span className="title_headersmall me-2">Wish list</span>
            </NavLink>
          </div>
          <div className="Login-icon">
            <NavLink to="/login" className="link text-white">
              <i class="fa fa-user-circle ms-1 me-1"></i>
              <span className="title_headersmall">Login</span>
            </NavLink>
          </div>
        </div>
      </div>
      {/* ---------------------------------lightHeader---------------------------------- */}
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src="/img/logo/logo-bglight-trans.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={linkBrandname}>
                Brand name
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={linkProduct}>
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={linkRoom}>
                Room
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={linkInspiration}>
                Inspiration Corner
              </NavLink>
            </li>
          </ul>
          <form className="d-flex pe-5 form-search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 form-input-search"
              type="search"
              placeholder="Search item..."
              aria-label="Search"
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
      {/* ------------------------------------headerScroll--------------------------------------*/}
      <nav
        className="navbar navbar-expand-md bg-light navbar-light"
        id="headerFixed"
      >
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src="/img/logo/logo-bglight-trans.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between "
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={linkBrandname}>
                Brand name
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={linkProduct}>
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={linkRoom}>
                Room
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={linkInspiration}>
                Inspiration Corner
              </NavLink>
            </li>
          </ul>
          <div className="right-header-scroll ">
            <div className="ShopingCart-icon_scrollheader">
              <NavLink to="/shopingcart">
                <div className=" text-center">
                  <ShopingCart_icon_scrollheader />
                </div>
              </NavLink>
              <ShopingCart_float shopingcart={shopingcart} />
            </div>
            <div className="search-form">
              <form className="d-flex pe-3 form-search" onSubmit={handleSubmit}>
                <input
                  className="form-control form-input-search"
                  type="search"
                  placeholder="Search item..."
                  aria-label="Search"
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                />
                <button
                  className="btn btn-outline-dark ms-2"
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
