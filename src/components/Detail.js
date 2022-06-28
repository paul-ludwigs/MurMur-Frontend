import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const api = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  let tagClass;

  const [murmur, setMurmur] = useState(null);
  const [user, setUser] = useState(null);
  const [userName, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [upvoteActive, setUpvoteActive] = useState(false);
  const [downvoteActive, setDownvoteActive] = useState(false);
  const [upvotesCount, setUpvotesCount] = useState();
  const [downvotesCount, setDownvotesCount] = useState();
  const [tagClassnames, setTagClassnames] = useState([])

  const tags = [
    { name: "Food+Drink", classname: "fa-solid fa-utensils"},
    { name: "Location", classname: "fa-solid fa-location-dot"},
    { name: "Sport+Activity", classname: "fa-solid fa-volleyball"},
    { name: "Event", classname: "fa-solid fa-calendar-check"},
    { name: "General", classname: "fa-solid fa-ball-pile"},
    { name: "Warning", classname: "fa-solid fa-skull-crossbones"},
  ];


  useEffect(() => {
    const fetching = async () => {
      const token = localStorage.getItem("token");
      const loggedInUser = await axios.get(
        `${api}/protected/me`,
        { headers: { token: token } }
      );
      console.log(loggedInUser);
      setUsername(loggedInUser.data.username);

      const { data } = await axios.get(`${api}/murmur/id/${id}`);

      const userData = await axios.get(`${api}/users/${data.user_id}`);
      setMurmur(data);
      setUser(userData.data);
      setUpvotesCount(data.upvotes.length);
      setDownvotesCount(data.downvotes.length);
      console.log(data.upvotes);

      let tagClasses = [];
      data.tags.map(tag => {
         tagClasses.push(tags.find(element => element.name == tag).classname);
      })
      console.log(tagClasses);
      setTagClassnames(tagClasses);

      if(data.upvotes.some(i => i.username.includes(loggedInUser.data.username)))
      {
        setUpvoteActive(true);
      }
      else if (data.downvotes.some(i => i.username.includes(loggedInUser.data.username)))
      {
        setDownvoteActive(true);
      }
    }
    fetching();
  }, [api, id]);

  const handleUpvote = function (event) {
    setUpvoteActive((current) => !current);
    console.log(upvoteActive);
    const fetching = async () => {
      await   
      axios
      .put(`${api}/murmur/upvote`, {username: userName, id: murmur._id})
      .then((data) => console.log(data));
    }
    fetching();
    if(!upvoteActive)
    {
      setUpvotesCount(upvotesCount + 1);
    } else {
      setUpvotesCount(upvotesCount - 1);
    }
    
    if (!upvoteActive && downvoteActive) {
      setDownvoteActive(false);
      setDownvotesCount(downvotesCount - 1);
    }
  };
  const handleDownvote = function (event) {
    setDownvoteActive((current) => !current);
    const fetching = async () => {
      await   
      axios
      .put(`${api}/murmur/downvote`, {username: userName, id: murmur._id})
      .then((data) => console.log(data));
    }
    fetching();
    if(!downvoteActive)
    {
      setDownvotesCount(downvotesCount + 1);
    } else {
      setDownvotesCount(downvotesCount - 1);
    }
    if (!downvoteActive && upvoteActive) {
      setUpvoteActive(false);
      setUpvotesCount(upvotesCount - 1);
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
            {murmur.picture && 
              <div className="col-11 col-sm-8 text-center p-0">
                <img
                  src={
                    murmur.picture
                  }
                  className="card-img-top pt-0 m-0"
                  alt="detail"
                />{" "}
              </div>
            }
          </div>
          <div className="row">
            <div className="col-xs-0 col-sm-2"></div>
            {murmur.tags.map((tag, index) => (
              <>
              {/* {tagClass = tags.find(element => element.name == tag)} */}
              <div className="col-3 col-md-2 col-lg-1 detail-tag">
                <i className={tagClassnames[index] + " detail-tag-text "}></i>
              </div>
              </>
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
                {upvotesCount}
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
                {downvotesCount}
              </button>
            </div>
          </div>
        </div>
      ) : console.log(murmur)}
    </>
  );
}

export default Detail;
