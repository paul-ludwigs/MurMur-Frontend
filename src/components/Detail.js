import React, { useState } from "react";

function Detail() {

  const [upvoteActive, setUpvoteActive] = useState(false);
  const [downvoteActive, setDownvoteActive] = useState(false);
  const tags = ["Location", "Warning", "Restaurant"];


  const handleUpvote = function(event) {
    setUpvoteActive(current => !current);
    console.log(upvoteActive);
    if(!upvoteActive && downvoteActive)
    {
      setDownvoteActive(false);
    }
  }
  const handleDownvote = function(event) {
    setDownvoteActive(current => !current);
    if(!downvoteActive && upvoteActive)
    {
      setUpvoteActive(false);
    }
  }

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="city-name">Tokyo</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-0 col-sm-2"></div>
        <div className="col-sm-4">
          <img
            src={"https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png"}
            alt="profilepic"
            className="rounded-circle img-fluid me-3"
            style={{ width: "90px" }}
          />
          <label>Paul</label>{" "}
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-12 text-center">
          <p>10.10.2010</p>
        </div>
        <div className="col-11 col-sm-8 text-center p-0">
          <img
            src={"https://media.istockphoto.com/photos/outdoor-trattoria-in-a-quiant-village-in-tuscany-italy-picture-id453203585?k=20&m=453203585&s=612x612&w=0&h=FzQei_2Hu-0dK078vsluFatX5iTyqQ1ADxir115gFaQ="}
            className="card-img-top pt-0 m-0"
            alt="detail"
          />{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-0 col-sm-2"></div>
          {tags.map((tag) => (
        <div className="col-3 col-md-2 col-lg-1 detail-tag">
            <p className="detail-tag-text">{tag}</p>
        </div>
          ))}
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-10 col-md-8 col-xl-6 murmur-text">
          <p>Lorem ipsum und so</p>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-4 col-sm-3 text-center">
          <button className="btn btn-light" onClick={handleUpvote}>
          <i className={upvoteActive ? "fa-solid fa-thumbs-up vote-button upvote-button" : "fa-solid fa-thumbs-up vote-button"}></i>
            15            
          </button>
        </div>
        <div className="col-4 col-sm-3 text-center">
        <button className="btn btn-light" onClick={handleDownvote}>
          <i className={downvoteActive ? "fa-solid fa-thumbs-down vote-button downvote-button" : "fa-solid fa-thumbs-down vote-button"}></i>
            15            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
