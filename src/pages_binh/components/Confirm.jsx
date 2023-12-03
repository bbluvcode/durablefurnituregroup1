import React from "react";
import { NavLink } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function Confirm() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="icon-check_circle display-3 text-success" />
              <h2 className="display-3 text-black underLine">Register Successfully!</h2>
              <p className="lead mb-5">
                We have sent you a confirm email from bbluvcode@gmail.com
              </p>
              <p>
                <button
                  className="btn btn-sm height-auto px-5 py-3 btn-dark text-light"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to shop
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
