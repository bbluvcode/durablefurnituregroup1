import "./Inspiration.css";
import { useNavigate } from "react-router-dom";
function Inspiration() {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4 border-bottom pb-3">
          <button
            className="col-md-6 btn inspiration-box-post"
            onClick={() => navigate(`/inspiration1`)}
          >
            <img
              src="img/img_product/img1.png"
              alt=""
              className="inspiration-post-img"
            />

            <p className="h2 inspiration-post-title">
              HOW TO CHOOSE AN OFFICE SOFA
            </p>
            <p className="inspiration-post-desc">
              In the office space, the sofa is not just a piece of furniture,
              but [...]
            </p>
          </button>
        </div>
        <div className="col-md-6 mb-4 border-bottom pb-3">
          <button
            className="col-md-6 btn border-0 inspiration-box-post"
            onClick={() => navigate(`/inspiration3`)}
          >
            <img
              src="img/img_product/img3.1.png"
              alt=""
              className="inspiration-post-img"
            />
            <p className="h2 inspiration-post-title">
              {" "}
              HOW TO CHOOSE DECORATIVE LIGHTS
            </p>
            <p className="inspiration-post-desc">
              Whether it's the living room, bedroom, dining room or office,
              decorative lights [...]
            </p>
          </button>
        </div>
        <div className="col-md-6 mb-4 border-bottom pb-3">
          <button
            className=" btn border-0 inspiration-box-post"
            onClick={() => navigate(`/inspiration4`)}
          >
            <img
              src="img/logo/post1.jpg"
              alt=""
              className="inspiration-post-img"
            />
            <p className="h2 inspiration-post-title">
              Create a quality dining room with 5 simple ways
            </p>
            <p className="inspiration-post-desc">
              The dining room is the connection and relaxation space of every
              family, where [...]
            </p>
          </button>
        </div>
        <div className="col-md-6 mb-4 border-bottom pb-3">
          <button
            className=" btn border-0 inspiration-box-post"
            onClick={() => navigate(`/inspiration2`)}
          >
            <img
              src="img/img_product/img2.png"
              className="inspiration-post-img"
              alt=""
            />
            <p className="h2 inspiration-post-title">
              THE ART OF CHOOSING DECORATIVE LIGHTS FOR MODERN SPACES
            </p>
            <p className="inspiration-post-desc">
              Decorative lights are not only a source of light for the home, but
              also [...]
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
