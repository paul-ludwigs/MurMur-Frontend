import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Search() {
  const [userName, setUserName] = useState("Stranger");

  const api = process.env.REACT_APP_API_URL;
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const checkIfTokenValid = async () => {
      if (token) {
        try {
          const res = await axios.get(`${api}/protected/me`, {
            headers: { token: token },
          });
          if (res.status === 200) {
            setIsAuthenticated(true);
            setUserName(res.data.username);
            console.log(res);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsAuthenticated(false);
      }
    };
    checkIfTokenValid();
  }, []);

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let cityname = e.target[0].value;
    cityname = cityname.toLowerCase();
    console.log(cityname);
    navigate(`${cityname}`);
  };
  return (
    <>
    <div className="container mx-auto">
        <div className="row">
          <div className="text-center">
        <h1 className="greeting-font">
            Hello there, {userName}!
          </h1>
          </div>
      <div className="col text-center my-2 mx-3 transparent-bg" style={{ padding: "1rem" }}>
        <div style={{ padding: "0.5rem" }}>
          
          <p style={{ padding: "0.5rem" }}>
            Almost there!
            Down below you can use the field to enter the Cityname you might be interested in and our Database
            will spool up to deliver the MurMurs you were looking for!
            The result page comes with a bunch of filters for you to click and better navigate, you must not worry about those for now!
          </p>
          <div
            className="input-group mb-1"
            style={{ padding: "0.5rem", justifyContent: "center" }}
          >
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="form-control"
                placeholder="Search for city"
                aria-describedby="basic-addon2"
              />
            </form>
          </div>

          {/* Carousel */}
          <div className="container text-center mt-3 mb-5" >
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              
              <div className="carousel-inner">
                <div className="carouselimage" style={{ height: "100px" }}>
                  <div className="carousel-item active">
                    <img
                      src={require("../images/TokyoCity.JPG")}
                      className="d-block w-100  carouselimg"
                      alt="Tokyo"
                      
                    />
                  </div>
                  <div className="carousel-item">
                    <div className="text-center" style={{height:"10rem"}}>
                    <h5>Can't decide?</h5>
                    <p>
                      What about... Tokyo!
                    </p>
                    <p>
                      Tokyo, the capital of Japan is among our communitys favourites!
                    </p>
                    <p>416 MurMurs are waiting for you!</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../images/California.JPG")}
                      className="d-block w-100 carouselimg"
                      alt="California"  
                    />
                  </div>
                  <div className="carousel-item">
                    <div className="text-center" style={{height:"10rem"}}>
                    <h5>Being unsure?</h5>
                    <p>
                      What about... Rome! 
                    </p>
                    <p>
                       Bella Italia...
                       Exceptional Food and a city rich in History!                      
                    </p>
                    <p>
                      648 MurMurs for you to explore!
                    </p>
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
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
