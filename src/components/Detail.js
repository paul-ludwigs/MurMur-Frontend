import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Detail() {
  const api = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const { isAuthenticated } = useContext(AuthContext);

  const [murmur, setMurmur] = useState(null);
  const [user, setUser] = useState(null);
  const [userName, setUsername] = useState();
  const [upvoteActive, setUpvoteActive] = useState(false);
  const [downvoteActive, setDownvoteActive] = useState(false);
  const [upvotesCount, setUpvotesCount] = useState();
  const [downvotesCount, setDownvotesCount] = useState();
  const [tagClassnames, setTagClassnames] = useState([]);

  const tags = [
    { name: "Food+Drink", classname: "fa-solid fa-utensils" },
    { name: "Location", classname: "fa-solid fa-location-dot" },
    { name: "Sport+Activity", classname: "fa-solid fa-volleyball" },
    { name: "Event", classname: "fa-solid fa-calendar-check" },
    { name: "General", classname: "fa-solid fa-cubes-stacked" },
    { name: "Warning", classname: "fa-solid fa-skull-crossbones" },
  ];


  useEffect(() => {
    const fetching = async () => {
      const token = localStorage.getItem("token");
      if (isAuthenticated) {
        var loggedInUser = await axios.get(`${api}/protected/me`, {
          headers: { token: token },
        });

        setUsername(loggedInUser.data.username);
      } else {
        var loggedInUser = "Stranger";
      }

      const { data } = await axios.get(`${api}/murmur/id/${id}`);

      const userData = await axios.get(`${api}/users/${data.user_id}`);
      setMurmur(data);
      setUser(userData.data);
      setUpvotesCount(data.upvotes.length);
      setDownvotesCount(data.downvotes.length);

      let tagClasses = [];
      data.tags.map((tag) => {
        tagClasses.push(tags.find((element) => element.name == tag).classname);
      });

      setTagClassnames(tagClasses);

      if (isAuthenticated) {
        if (
          data.upvotes.some((i) =>
            i.username.includes(loggedInUser.data.username)
          )
        ) {
          setUpvoteActive(true);
        } else if (
          data.downvotes.some((i) =>
            i.username.includes(loggedInUser.data.username)
          )
        ) {
          setDownvoteActive(true);
        }
      }
    };
    fetching();
  }, [api, id, userName]);

  /*Get the whished date format DD-MM-YYYY*/
  const getDateFormat = (articleDate) => {
    const myDateArray = articleDate.slice(0, 10);
    const newDateFormat = myDateArray.split("-").reverse().join(".");
    return newDateFormat;
  };

  const handleUpvote = function (event) {
    if (!isAuthenticated) {
      toast("You can only vote if you're logged in!");
    } else {
      setUpvoteActive((current) => !current);

      const fetching = async () => {
        await axios
          .put(`${api}/murmur/upvote`, { username: userName, id: murmur._id })
          .then((data) => console.log(data));
      };
      fetching();
      if (!upvoteActive) {
        setUpvotesCount(upvotesCount + 1);
      } else {
        setUpvotesCount(upvotesCount - 1);
      }

      if (!upvoteActive && downvoteActive) {
        setDownvoteActive(false);
        setDownvotesCount(downvotesCount - 1);
      }
    }
  };
  const handleDownvote = function (event) {
    if (!isAuthenticated) {
      toast("You can only vote if you're logged in!");
    } else {
      setDownvoteActive((current) => !current);
      const fetching = async () => {
        await axios
          .put(`${api}/murmur/downvote`, { username: userName, id: murmur._id })
          .then((data) => console.log(data));
      };
      fetching();
      if (!downvoteActive) {
        setDownvotesCount(downvotesCount + 1);
      } else {
        setDownvotesCount(downvotesCount - 1);
      }
      if (!downvoteActive && upvoteActive) {
        setUpvoteActive(false);
        setUpvotesCount(upvotesCount - 1);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      {murmur && user ? (
        <div className="container" style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
          <div className="row">
            <div className="col-12 col-sm-12">
              <div>
                <h1 className="cursive-font city-name">
                  {murmur.city.charAt(0).toUpperCase() + murmur.city.slice(1)}
                </h1>
              </div>
              <div className="transparent-bg text-center "> 
              <div className="container"  style={{minWidth:"19rem"}}>
                

                <div className="col-12 col-sm-12">
                  <div className="row justify-content-center sm-4">
                    <img
                      src={
                        user.picture
                          ? user.picture
                          : "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png"
                      }
                      alt="profilepic"
                      className="rounded-circle img-fluid me-3 mt-4"
                      style={{ width: "90px" }}
                    />
                    <label className="mt-4">{user.username}</label>{" "}
                  </div>
                </div>

                <div className="row justify-content-center mt-5">
                  <div className="col-sm-12 text-center">
                    <p>{getDateFormat(murmur.date)}</p>
                    
                  </div>
                  {murmur.picture && (
                    <div className="col-11 col-sm-8 text-center p-0">
                      <img
                        src={murmur.picture}
                        className="card-img-top pt-0 m-0"
                        alt="detail"
                      />{" "}
                    </div>
                  )}
                </div>
                <div className="row">
                  <div className="col-xs-0 col-sm-2"></div>
                  {murmur.tags.map((tag, index) => (
                    <>
                      {/* {tagClass = tags.find(element => element.name == tag)} */}
                      <div className="col-3 col-md-2 col-lg-1 detail-tag">
                        <i
                          className={tagClassnames[index] + " detail-tag-text "}
                        ></i>
                      </div>
                    </>
                  ))}
                </div>
                <div className="row mt-5 justify-content-center">
                  <div className="col-10 col-md-8 col-xl-6">
                    <p>{murmur.tip}</p>
                  </div>
                </div>
                <div className="row justify-content-center mt-5 mb-3 py-2">
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        console.log(murmur)
      )}
    </>
  );
}

export default Detail;
