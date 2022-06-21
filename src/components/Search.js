import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Search() {

  let navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    let cityname = e.target[0].value;
    cityname=cityname.toLowerCase();
    console.log(cityname);
    navigate(`${cityname}`)
    
    
  }
  return (
    <>
      <div className="container mx-auto text-center mt-5">
        <h1>Hi User,</h1>
        <p>
          Search the name of the city where you want to go or where you are.
          Citysearch helps you to find useful information about your
          destination. So you can find restaurants, bars, fotolocations,
          warnings and more.
        </p>
        <div className="input-group mb-3">
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
        <div className="container mx-auto text-center mt-5 mb-5" >
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
            <div className="carouselimage" style={{height: "100px" }} >
              <div className="carousel-item active">
                <img
                  src={require("../images/Beach.JPG")}
                  className="d-block w-100"
                  alt="beach"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../images/Food.JPG")}
                  className="d-block w-100"
                  alt="Food"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../images/TokyoCity.JPG")}
                  className="d-block w-100"
                  alt="TokyoCity"
                />
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
    </>
  );
}

export default Search;
