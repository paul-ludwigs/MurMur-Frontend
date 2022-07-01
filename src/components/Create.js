import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Create() {
  const [userId, setUserId] = useState();
  const api = process.env.REACT_APP_API_URL;

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
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
    

    // enforce at least one tag is toggled and both input fields are filled out, then post request:
    if (postArray.length == 0 || !cityName || !tip) {
      toast("Please fill out all Forms and select at least one Tag!");      
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
      axios.post(`${api}/Murmur`, newMurmur)
      .then(res => statusCheck(res))
      .catch(error => console.log(error));

      // check response status and give user feedback:
      function statusCheck(res) {if(res.status === 201){
        toast("Thanks for sharing! Your MurMur has been created!",
         {onClose: () => window.location.reload()})
      } else {
        toast("Oh no. Something went wrong, we could not create your MurMur!")
      }
    };
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="text-center my-3 ">
        <h1 className="greeting-font">Write your own MurMur!</h1>
      </div>
      
      <div className="container mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col transparent-bg my-2 mx-3">            
        <h5 className="mt-3">Go on then, we're super eager to learn what you've got to share!</h5>
        <br/>
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
          <div className="row">
            <div className="col">
          <button
            type="button"
            className="tag-button crbutton btn btn-sm btn-primary mt-2 px-1"
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
          ><div className="fa-solid fa-utensils pe-2"></div>
            Food+Drink
          </button>
          <button
            type="button"
            className="tag-button crbutton btn btn-sm btn-primary mt-2 ms-1"
            data-bs-toggle="button"
            autocomplete="off"
          ><div className="fa-solid fa-location-dot pe-2"></div>
            Location
          </button>
          </div>
          </div>

          <div className="row">
            <div className="col">
          <button
            type="button"
            className="tag-button crbutton btn btn-sm btn-primary mt-2"
            data-bs-toggle="button"
            autocomplete="off"
          ><div className="fa-solid fa-volleyball pe-2"></div>
            Sport+Activity
          </button>
          <button
            type="button"
            className="tag-button crbutton btn btn-sm btn-primary mt-2 ms-1"
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
          ><div className="fa-solid fa-calendar-check pe-2"></div>
            Event
          </button>
          </div>
          </div>
          
          <div className="row">
            <div className="col">
          <button
            type="button"
            className="tag-button crbutton btn btn-sm btn-primary mt-2"
            data-bs-toggle="button"
            autocomplete="off"
          ><div className="fa-solid fa-cubes-stacked pe-2"></div>
            General
          </button>
          <button
            type="button"
            className="tag-button crbutton btn btn-sm btn-primary mt-2 ms-1"
            data-bs-toggle="button"
            autocomplete="off"
          ><div className="fa-solid fa-skull-crossbones pe-2"></div>
            Warning
          </button>
          </div>
          </div>
        
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
      </div>
      </div>
      </div>
    </>
  );
}

export default Create;
