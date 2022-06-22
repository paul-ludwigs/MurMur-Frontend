import React from "react";

function Detail() {
  return (
    <div className="container-md">
      <div className="row">
        <div class="col-sm-12">
          <h2 className="city-name">Tokyo</h2>
        </div>
      </div>
      <div className="row">
        <div class="col-sm-4">
          <img
            src={require("../images/profilepic.JPG")}
            alt="profilepic"
            className="rounded-circle img-fluid me-3"
            style={{ width: "90px" }}
          />
          <label>Author</label>{" "}
        </div>
      </div>
      <div className="row">
        <div class="col-sm-12 text-center">
          <p>10.10.2010</p>
        </div>
        <div class="col-sm-12 text-center pt-0">
          <img
            src={require("../images/landingpage_image.JPG")}
            className="card-img-top image pt-0 m-0"
            alt="detail image"
          />{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">Tags as icons</div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-10 col-md-8 col-xl-6 testing murmur-text">
          <p>Lorem ipsum und so</p>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-4 col-sm-3 text-center">
          <button className="btn btn-light">
          <i className="fa-solid fa-thumbs-up test-button"></i>
            15            
          </button>
        </div>
        <div className="col-4 col-sm-3 text-center">
        <button className="btn btn-light">
          <i className="fa-solid fa-thumbs-down test-button"></i>
            15            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
