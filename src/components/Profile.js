import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  const [userName, setUserName] = useState("Max");
  const [eMail, setEMail] = useState("Username@email.com");
  const [picture, setPicture] = useState(require("../images/profilepic.JPG"))
  const api = process.env.REACT_APP_API_URL;
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    const checkIfTokenValid = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${api}/protected/me`,
            { headers: { token: token } }
          );
          if (res.status === 200) {
            setIsAuthenticated(true);
            setUserName(res.data.username)
            setEMail(res.data.email)
            setPicture(res.data.picture)
            console.log(res)
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

  

  return (
    <>
      <div className="card-body text-center mt-5">
        <img
          src={picture}
          alt="profilepic"
          className="rounded-circle img-fluid"
          style={{ width: "150px" }}
        />
        
        <div className="container mx-auto text-center mt-5">
          <label htmlFor="file-upload" className="custom-file-upload">
            Add picture
          </label>
          <input id="file-upload" type="file" />
        </div>
        <form>
          <input className="my-3" value={userName} />
          <br />
          <input className="my-3" value={eMail} />
          <br />
          <button type="button" className="btn">
            Edit profile
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;
