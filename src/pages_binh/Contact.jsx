import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phonenumber: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      if (formik.isValid) {
        handleSubmit(values);
      }
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Minimum is 2 symbols!")
        .max(20, "Maximum is 20 symbols!")
        .required("Required"),
      phonenumber: Yup.string()
        .min(8, "Minimum is 8 symbols!")
        .required("A phone number is required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      message: Yup.string().required("Required"),
    }),
  });

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx2GLoyoOlXQZqDUWNA5Sp8x5NQZnwdpNF831Tl6XZR9WCArjemEOhWQ4u-7Cwb93C0Xw/exec";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then((response) => {
        console.log("Success!", response);
        // alert("Register Successfully");
        navigate("/confirm");
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert(
          "Có lỗi xảy ra, vui lòng liên hệ <email> để được hỗ trợ mua hàng."
        );
      });
  };

  return (
    <div>
      <div className="contact container text-center">
        {/*----------------------- Contact us -------------------------*/}
        <div className="contact-us container-fluid text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-3 " style={{ fontWeight: 700 }}>
                Contact Us
              </h1>
              <p
                className="mt-4 mb-3 slogan-inContact"
                style={{ fontWeight: 500 }}
              >
                Elegance, Comfort, Durability - All in Durable Furnitures
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-4 contact-us-child">
              <NavLink
                className="link contact-us-child"
                to="https://maps.app.goo.gl/uYeCdhbNMTpt6mh78"
              >
                <i className="fa fa-map-marked-alt contact-us-icon" />
                <h5>ADDRESS</h5>
                <p className="contact-us-content">590 CMT8 HCM city</p>
              </NavLink>
            </div>
            <div className="col-4 contact-us-child">
              <NavLink className="link contact-us-child" to="tel:+840939966602">
                <span className="rise-shake">
                  <i className="fa fa-mobile-alt contact-us-icon rise-shake" />
                </span>
                <h5>PHONE</h5>
                <p className="contact-us-content">09.xxx.xxxx</p>
              </NavLink>
            </div>
            <div className="col-4 contact-us-child">
              <NavLink
                className="link contact-us-child"
                to="mailto:durablefurnitures2023@gmail.com"
              >
                <i className="fa fa-envelope-open-text contact-us-icon" />
                <h5>EMAIL</h5>
                <p className="contact-us-content">abcxyz@gmail.com</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* ------------------------Form & map --------------------------*/}
        <div className="">
          <div className="row">
            {/* --------Form-------- */}
            <div className="col-md-5 form h-100">
              <div className="container-form">
                <p className="form-title">REGISTER FOR IN-HOME CONSULTATION</p>
                <p>
                  Schedule a meeting with our interior design consultant at your
                  home by{" "}
                  <strong>
                    {" "}
                    providing your information in the form below{" "}
                  </strong>
                  , or call the hotline at <strong> 09.xxx.xxxx</strong>
                </p>
                <form
                  name="submit-to-google-sheet"
                  onSubmit={(e) => {
                    formik.handleSubmit(e);
                    handleSubmit(e);
                  }}
                >
                  <div className="row">
                    <div className="col-6 form-group">
                      <p className="bold label-contact">Your name</p>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        className="form-width form-control"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.name && formik.touched.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="col-6 form-group">
                      <p className="bold label-contact">Your phone</p>
                      <input
                        name="phonenumber"
                        id="phonenumber"
                        type="text"
                        placeholder="Enter number phone"
                        className="form-width form-control"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.phonenumber &&
                      formik.touched.phonenumber ? (
                        <div className="text-danger">
                          {formik.errors.phonenumber}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 form-group">
                      <p className="bold label-contact">Your email</p>
                      <input
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Enter email"
                        className="form-width form-control"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 form-group">
                      <p className="bold label-contact">Your message (optional)</p>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        className="form-width form-control"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.message && formik.touched.message ? (
                        <div className="text-danger">
                          {formik.errors.message}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <NavLink className="link" to="tel:+840939966602">
                        <button className="btn btn-danger form-width btn-grad">
                          <div>
                            <i className="fa fa-phone-volume" /> 09.xxx.xxxx
                          </div>
                        </button>
                      </NavLink>
                    </div>
                    <div className="col-6">
                      <input
                        type="submit"
                        value="SUBMIT"
                        className="btn btn-outline-dark form-width"
                        disabled={!formik.isValid}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* --------Map------- */}
            <div className="col-7 medium-7 small-12 large-7 map h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2738625664215!2d106.66307250000001!3d10.7903245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecd3866aabb%3A0x3e8d110dcb80b5c!2zNTkwIEPDoWNoIE3huqFuZyBUaMOhbmcgOCwgUGjGsOG7nW5nIDUsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1699963011898!5m2!1svi!2s"
                title="Map Google"
                width={700}
                height={550}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
