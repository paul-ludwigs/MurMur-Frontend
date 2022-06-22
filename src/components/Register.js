import React from 'react';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Register() {
  const api = process.env.REACT_APP_API_URL;

  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleSubmit = async function (event) {
    event.preventDefault()
    const accountName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const repeatPassword = event.target[3].value;

    if(!accountName || !email || !password || !repeatPassword){
      alert("Please fill out all forms!")
    } else if(password !== repeatPassword){
      alert("Your passwords don't match!")
    } else {      
      const newUser = {
        username: accountName,
        email: email,
        password: password,
        picture: ""
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/users/register`, newUser);
        const token = res.headers.authorization;
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
       } catch (error) {
        console.log(error);
       }
    };
  };

  //if (isAuthenticated) return <Navigate to="../search" />;

  return (
    <>
    <div className="text-center">
      <img
            src={require("../images/landingpage_image.JPG")}
           className="card-img-top image align-self-center img-thumbnail"
            alt="landingpageimage"
      />
    </div>

    <form onSubmit={handleSubmit}>
      <div className="text-center mb-3 row">
        <label htmlFor="Accountname" className="col-sm-2 col-form-label">
          Accountname
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="registerAccountname" />
        </div>
      </div>

      <div className="text-center mb-3 row mt-3">
        <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">
          Email address
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" placeholder="email@example.com" id="registerEmail" />
        </div>
      </div>
      
      <div className="text-center mb-3 row">
        <label htmlFor="Password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="registerPassword" />
        </div>
      </div>

      <div className="text-center mb-3 row">
        <label htmlFor="repeatPassword" className="col-sm-2 col-form-label">
          Repeat Password
        </label>
        <div className="col-sm-10">
        <input type="password" className="form-control" id="registerRepeatPassword" />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-info mb-3 mt-5">
          Submit
        </button>
      </div>
    </form>




    </>
  )
}

export default Register