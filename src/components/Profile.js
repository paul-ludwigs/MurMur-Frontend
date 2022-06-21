import React from "react";
import axios from "axios";
import { useState } from "react";
function Profile() {
  const [userName, setUserName] = useState("Max");
  const [eMail, setEMail] = useState("Username@email.com");

  const clickHandler = () => {
    // put request 
    // über setUserName & serEMail können die Daten geändert werden
  };
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
          <button type="button" className="btn" onClick={clickHandler}>
            Edit profile
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;
