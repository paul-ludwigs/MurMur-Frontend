import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Create() {
  const [userId, setUserId] = useState();
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
            setUserId(res.data._id)
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

  console.log(userId)

  const handleSubmit = function (event) {
    event.preventDefault();

    // find cityname and tip:
    const cityName = event.target[0].value;
    const tip = event.target[7].value;

    // organize data of toggle buttons:
    const btnArray = [
      { name: "Food+Drink", boolean: event.target[1].ariaPressed },
      { name: "Location", boolean: event.target[2].ariaPressed },
      { name: "Sport+Activity", boolean: event.target[3].ariaPressed },
      { name: "Event", boolean: event.target[4].ariaPressed },
      { name: "General", boolean: event.target[5].ariaPressed },
      { name: "Warning", boolean: event.target[6].ariaPressed },
    ];

    // push only toggled tag-names into array for the post request:
    let postArray = [];

    btnArray.map((item) => {
      if (item.boolean === "true") {
        postArray.push(item.name);
      }
    });

    // find current date:
    const today = new Date(Date.now()).toISOString();
    console.log(today);

    // enforce at least one tag is toggled and both input fields are filled out, then post request:
    if (postArray.length == 0 || !cityName || !tip) {
      alert("Please fill out all Forms and select at least one Tag!");
    } else {
      const newMurmur = {
        user_id: userId,
        city: cityName.toLowerCase(),
        tip: tip,
        picture: "",
        address: "",
        date: today,
        tags: postArray,
      };
      axios.post(`${api}/Murmur`, newMurmur);
    }
  };

  return (
    <>
      <div className="text-center mb-3">
        <h1>Create a new MurMur!</h1>
        <h2>We are eager to hear about what you want to share!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-center container mb-3 mx-auto">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Tokyo"
          />
        </div>

        <div className="container mx-auto text-center mt-3">
          <button
            type="button"
            className="crbutton btn btn-sm btn-primary mt-2 mx-1 active"
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
          >
            Food+Drink
          </button>
          <button
            type="button"
            className="crbutton btn btn-sm btn-primary mt-2 mx-1"
            data-bs-toggle="button"
            autocomplete="off"
          >
            Location
          </button>
          <button
            type="button"
            className="crbutton btn btn-sm btn-primary mt-2 mx-1"
            data-bs-toggle="button"
            autocomplete="off"
          >
            Sport+Activity
          </button>
        </div>
        <div className="container mx-auto text-center mt-1  mb-2">
          <button
            type="button"
            className="crbutton btn btn-sm btn-primary mt-2 mx-1 active"
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
          >
            Event
          </button>
          <button
            type="button"
            className="crbutton btn btn-sm btn-primary mt-2 mx-1"
            data-bs-toggle="button"
            autocomplete="off"
          >
            General
          </button>
          <button
            type="button"
            className="crbutton btn btn-sm btn-primary mt-2 mx-1"
            data-bs-toggle="button"
            autocomplete="off"
          >
            Warning
          </button>
        </div>

        <div className="text-center mb-3 mt-3 container mx-auto">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            You can enter your Tip below
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-info mb-3 mt-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Create;
