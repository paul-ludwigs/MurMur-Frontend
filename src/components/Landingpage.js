import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landingpage = () => {
  const api = process.env.REACT_APP_API_URL;
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  //Submit for login form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    const loginData = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      toast("Please fill out all forms!");
    } else {
      try {
        const res = await axios.post(`${api}/users/login`, loginData);

        const token = res.headers.authorization;
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        toast("Unable to login. Please check your login credentials!");
      }
    }
  };

  if (isAuthenticated === true) return <Navigate to="../search" />;

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto text-center mt-2">
        <h1 className="px-2 mb-4 greeting-font">
          Hello and Welcome to MurMur!
        </h1>
        <div className="transparent-bg mt-3">
          <h4 className="mb-3">We're so happy to have you!</h4>
          <p className="px-2">
            Are you looking to plan your next vacation, trip, adventure? Maybe
            you're looking for advice, tips or secrets regarding specific
            Destinations?
          </p>
          <h5 className="px-2 pb-2">Say no more! We've got you covered!</h5>
        </div>

        {/* First carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="card carousel-card"
                style={{ width: "18rem", margin: "1.5rem auto" }}
              >
                <img
                  src={require("../images/Tokyo.JPG")}
                  className="card-img-top"
                  alt="Tokyo"
                />
                <div className="card-body">
                  <h5 className="card-title">Tokyo</h5>

                  <p className="card-text">
                    Tokyo is the cleanest city which i have ever travelled! The
                    people there are very hospitable and there is so much to
                    see. You could spend many years to explore Japan. I love
                    Tokyo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="red"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="red"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="red"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </p>

                  <Link
                    to={`/search/tokyo/62c5554b4e755b1944db9d0f`}
                    className="btn"
                  >
                    Select
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="card carousel-card"
                style={{ width: "18rem", margin: "1.5rem auto" }}
              >
                <img
                  src={require("../images/Istanbul.JPG")}
                  className="card-img-top"
                  alt="Istanbul"
                />
                <div className="card-body">
                  <h5 className="card-title">Istanbul</h5>

                  <p className="card-text">
                    Istanbul are very plenty of attractions that make Istanbul
                    special.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      className="bi bi-hand-thumbs-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    When you are in Istanbul you have to cross the bosborus by
                    ferry, also crossing from Europe to Asia. ...
                  </p>

                  <Link to={`/search/istanbul/62c557484e755b1944db9d2d`} className="btn">
                    Select
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="card carousel-card"
                style={{ width: "18rem", margin: "1.5rem auto" }}
              >
                <img
                  src={require("../images/Drink.jpg")}
                  className="card-img-top"
                  alt="Cola"
                />
                <div className="card-body">
                  <h5 className="card-title">Milano</h5>

                  <p className="card-text">
                  If you dont want to pay more than is acceptable for a drink than you should not go to a bar in Milano Centrale. There are cheaper places outside the city, but you have to know where they are.🥵.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      className="bi bi-emoji-neutral-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                    </svg>
                  </p>

                  <Link to={`/search/milano/62c556cf4e755b1944db9d19`} className="btn">
                    Select
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="transparent-bg">
          <h2 className="px-2 py-2">What MurMur has got to offer:</h2>
        </div>

        {/* second carousel */}

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" data-interval="500">
            <div class="carousel-item active my-3">
              <p className="carousel-onlytxt text-center py-4">8400+ MurMurs</p>
            </div>
            <div className="carousel-item  my-3">
              <p className="carousel-onlytxt py-4">1250+ Cities</p>
            </div>
            <div className="carousel-item  my-3">
              <p className="carousel-onlytxt py-4">14.300+ User</p>
            </div>
          </div>
        </div>

        <div className="transparent-bg">
          <h2 className="px-2 pt-2">
            MurMur is an App from the Community, for the Community!
          </h2>
          <p className="px-2 pb-2">
            We firmly believe you cannot find better advice, tips, secrets or
            even warnings for your next travel destination, than by people
            who've been there before! Be it from locals or fellow travelers, our
            Database is bursting with tips for you!{" "}
          </p>
          <p>
            Not only does our Community author the tips themselves, but our
            up-/down vote system for each tip gives everyone a voice in helping
            make the best tips stand out the most!
          </p>
        </div>
        {/* third carousel */}

        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="card transparent-bg my-3"
                style={{ width: "18rem" }}
              >
                <img src={require("../images/create-page.png")} className="card-img-top mx-auto" alt="..." style={{maxHeight:"300px", maxWidth:"180px"}}/>
                <div className="card-body">
                  <p className="card-text">
                    Create your own MurMurs and share your experiences with
                    others!
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="card transparent-bg my-3"
                style={{ width: "18rem" }}
              >
                <img src={require("../images/detail-page.png")} className="card-img-top mx-auto" alt="..." style={{maxHeight:"300px", maxWidth:"180px"}}/>
                <div className="card-body">
                  <p className="card-text">
                    Check out what others shared, up- and downvote MurMurs to help others find the essentials!
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="card transparent-bg my-3"
                style={{ width: "18rem" }}
              >
                <img src={require("../images/search-page.png")} className="card-img-top mx-auto" alt="..." style={{maxHeight:"300px", maxWidth:"180px"}}/>
                <div className="card-body">
                  <p className="card-text">
                    Enter city names and browse our database!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Login Form box: */}
        <div className="container">
          <div className="row">
            <div className="col transparent-bg mx-auto my-2">
              <h5 className="mt-3">Let's log you in, shall we?</h5>

              {/* Form */}
              <form onSubmit={handleSubmit} id="loginformular">
                <div className="mb-2 row mt-3 mx-auto" style={{ width: "75%" }}>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="staticEmail"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-3 row mx-auto" style={{ width: "75%" }}>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-info mb-3 mt-3 mx-auto"
                  style={{ width: "25%" }}
                >
                  Sign-In
                </button>
              </form>

              {/* Button/Link */}
              <div className="text-center register mt-1">
                <p className="mx-1">You don't yet have an account?</p>
                <Link to="/register">Register here!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
