import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div class="pg-footer">
      <footer className="footer">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" />
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <NavLink className="footer-logo-link" to="/">
                <span className="hidden-link-text">LOGO</span>
                <img src="img/logo/logo-bgdark-trans.png" alt="" />
              </NavLink>
            </div>
            <div className="footer-menu">
              {/* <h2 className="footer-menu-name"> Get Started</h2> */}
              <ul id="menu-get-started" className="footer-menu-list" style={{ width: "100px", margin: "auto" }}>
                <li className="">
                  <img src="img/logo/copyright.png" alt="" />
                  <img src="img/logo/copyright1.png" alt="" />
                  <img src="img/logo/copyright2.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">MENU</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="product">Products</NavLink>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <NavLink to="brand">Brands</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="room">Room</NavLink>
                </li>

                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="group1">Meet the group</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Inspiration</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <NavLink target="_blank" rel="noopener noreferrer" to="inspiration1">Office Sofa</NavLink>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <NavLink target="_blank" rel="noopener noreferrer" to="inspiration2">Decorative Lights</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="inspiration3">Quatify dining</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="inspiration4">Lights for mordern Space</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">E-commerce</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <NavLink rel="noopener noreferrer" to="compare">Compare Products</NavLink>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <NavLink rel="noopener noreferrer" to="wishlist">Your Wish List</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="shopingcart">Your Cart</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="youmayalsolike">You May Also Like</NavLink>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <NavLink to="#">Our partners</NavLink></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="#">Reviews</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's Chat</h2>
              <p className="footer-call-to-action-description"> Have a support question?</p>
              <NavLink className="footer-call-to-action-button button" to="contact" target="_self"> Get in Touch </NavLink>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper"> <NavLink className="footer-call-to-action-link" to="tel:+84939966602" target="_self"> +84-9399-66602</NavLink></p>
            </div>
          </div>
          <div className="footer-social-links">
            <NavLink className="" to="#" target="_blank">
              <img className="footer-flower" src="img/logo/logotab.png" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <NavLink className="footer-copyright-link" to="#" target="_self"> ©2023 | Designed By: BAB_GROUP1 | All rights reserved. </NavLink>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
export default Footer;
