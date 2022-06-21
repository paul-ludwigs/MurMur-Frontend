import React from "react";
import axios from "axios";
import {useState} from "react";
function Profile() {

  const [userName, setUserName] = useState("Username");
  const [eMail, setEMail] = useState("Username@email.com");

  const clickHandler = () => {
// über setUserName & serEMail können die Daten geändert werden
  }
  return (
    <>
      <div className="card-body text-center mt-5">
        <img
          src={require("../images/profilepic.JPG")}
          alt="profilepic"
          className="rounded-circle img-fluid"
          style={{ width: "150px" }}
        />
        <div className="container mx-auto text-center mt-5">
          <label htmlFor="file-upload" class="custom-file-upload">
            Add picture
          </label>
          <input id="file-upload" type="file" />
        </div>

        <h1 className="my-3">{userName}</h1>
        <h2 className="my-3">{eMail}</h2>
        <button type="button" className="btn" onClick={clickHandler}>
          Edit profile
        </button>
      </div>
    </>
  );
}

export default Profile;
