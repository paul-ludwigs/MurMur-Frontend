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
        console.log(res);
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
      <div className="container mx-auto text-center mt-3">
        <div className="transparent-bg">
          <h1 className="px-2 pt-2">Hello and Welcome to MurMur!</h1>
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
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <div
                className="card carousel-card"
                style={{ width: "18rem", margin:"1.5rem auto" }}
              >
                <img
                  src={require("../images/Tokyo.JPG")}
                  className="card-img-top"
                  alt="Tokyo"
                />
                <div className="card-body">
                  <h5 className="card-title">Tokyo</h5>

                  <p className="card-text">
                    Tokyo is the cleanest city which i have ever travelled!The
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
                    to={`/search/tokyo/62bc209fe9e7ae3dc35ba587`}
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
                style={{ width: "18rem", margin:"1.5rem auto" }}
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
                    special. When you are in Istanbul you have to cross the
                    bosborus by ferry, also crossing from Europe to Asia and you
                    have to go to the princess islands, where you can enjoy the
                    island by ride a bicycle. I could spend more time in
                    Istanbul even if the traffic is very bad.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-hand-thumbs-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                  </p>

                  <Link to={`#`} className="btn">
                    Select
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="card carousel-card"
                style={{ width: "18rem", margin:"1.5rem auto" }}
              >
                <img
                  src={require("../images/Cola.JPG")}
                  className="card-img-top"
                  alt="Cola"
                />
                <div className="card-body">
                  <h5 className="card-title">Milano</h5>

                  <p className="card-text">
                    If you dont want to pay more than 8€ for a softdrink than
                    you should not go to a bar in Milano Centrale. There are
                    cheap places outside the city, but you have to know where
                    they are.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-emoji-neutral-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                    </svg>
                  </p>

                  <Link to={`#`} className="btn">
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

        {/* second carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div
            id="carouselExampleControls"
            class="carousel"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner transparent-bg mb-3"
              style={{ margin: "0% 35%", padding: "10%" }}
            >
              <div class="carousel-item active">
                <p className="carousel-font">Tips: 172500+</p>
              </div>
              <div class="carousel-item">
                <p className="carousel-font">Users: 17000+</p>
              </div>
              <div class="carousel-item">
                <p className="carousel-font">Citys: 2800+</p>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="transparent-bg">
          <h2 className="px-2 pt-2">What MurMur has got to offer:</h2>
        </div>

        {/* third carousel */}

        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card transparent-bg my-3" style={{width:"18rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Create your own MurMurs and share your experiences with others!
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card transparent-bg my-3" style={{width:"18rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Up- and Downvote MurMurs to help others find the essentials!
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card transparent-bg my-3" style={{width:"18rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Create and customize your own Account, it's fast and easy!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* Login Form box: */}
        <div className="container">
          <div className="row">
            <div className="col transparent-bg mx-3 my-2">
              <h5 className="mt-3">Let's log you in, shall we?</h5>

              {/* Form */}
              <form onSubmit={handleSubmit} id="loginformular">
                <div className="mb-2 row mt-3">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="staticEmail"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-info mb-3 mt-3">
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
