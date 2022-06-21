import React from "react";
import axios from "axios";
function Profile() {
  return (
    <>
      <div class="card-body text-center mt-5">
        <img
          src={require("../images/profilepic.JPG")}
          alt="profilepic"
          className="rounded-circle img-fluid"
          style={{ width: "150px" }}
        />
        <div className="container mx-auto text-center mt-5">
          <label for="file-upload" class="custom-file-upload">
            Add picture
          </label>
          <input id="file-upload" type="file" />
        </div>

        <h1 className="my-3">Username</h1>
        <h2 className="my-3">Username@email.com</h2>
        <button type="button" class="btn">
          Edit profile
        </button>
      </div>
    </>
  );
}

export default Profile;
