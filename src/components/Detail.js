import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const api = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [murmur, setMurmur] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [upvoteActive, setUpvoteActive] = useState(false);
  const [downvoteActive, setDownvoteActive] = useState(false);

  axios
  .get(`${api}/murmur/id/${id}`)
  .then((data) => {
    setMurmur(data.data);
    setUserId(data.data.user_id)
  })
  .catch((error) => console.log(error));

  useEffect(() => {
    if(userId) {
      axios
        .get(`${api}/users/${userId}`)
        .then((data) => setUser(data.data))
        .catch((error) => console.log(error));
    }
  }, [userId]);

  const handleUpvote = function (event) {
    setUpvoteActive((current) => !current);
    console.log(upvoteActive);
    if (!upvoteActive && downvoteActive) {
      setDownvoteActive(false);
    }
  };
  const handleDownvote = function (event) {
    setDownvoteActive((current) => !current);
    if (!downvoteActive && upvoteActive) {
      setUpvoteActive(false);
    }
  };

  return (
    <>
      {(murmur && user) ? (
        <div className="container-md">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="city-name">{(murmur.city.charAt(0).toUpperCase() + murmur.city.slice(1))}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-sm-4">
              <img
                src={user.picture ? user.picture  : "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png"}
                alt="profilepic"
                className="rounded-circle img-fluid me-3"
                style={{ width: "90px" }}
              />
              <label>{user.username}</label>{" "}
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-sm-12 text-center">
              <p>{murmur.date}</p>
            </div>
            <div className="col-11 col-sm-8 text-center p-0">
              <img
                src={
                  murmur.picture
                }
                className="card-img-top pt-0 m-0"
                alt="detail"
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-0 col-sm-2"></div>
            {murmur.tags.map((tag) => (
              <div className="col-3 col-md-2 col-lg-1 detail-tag">
                <p className="detail-tag-text">{tag}</p>
              </div>
            ))}
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-10 col-md-8 col-xl-6 murmur-text">
              <p>{murmur.tip}</p>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-4 col-sm-3 text-center">
              <button className="btn btn-light" onClick={handleUpvote}>
                <i
                  className={
                    upvoteActive
                      ? "fa-solid fa-thumbs-up vote-button upvote-button"
                      : "fa-solid fa-thumbs-up vote-button"
                  }
                ></i>
                {murmur.upvotes.length}
              </button>
            </div>
            <div className="col-4 col-sm-3 text-center">
              <button className="btn btn-light" onClick={handleDownvote}>
                <i
                  className={
                    downvoteActive
                      ? "fa-solid fa-thumbs-down vote-button downvote-button"
                      : "fa-solid fa-thumbs-down vote-button"
                  }
                ></i>
                {murmur.downvotes.length}
              </button>
            </div>
          </div>
        </div>
      ) : console.log(murmur)}
    </>
  );
}

export default Detail;
