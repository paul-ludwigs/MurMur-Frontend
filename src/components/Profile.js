import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  const emptyProfilePicture =
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  const [userName, setUserName] = useState("Accountname");
  const [eMail, setEMail] = useState("Username@email.com");
  const [picture, setPicture] = useState(require("../images/profilepic.JPG"));
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
            setUserName(res.data.username);
            setEMail(res.data.email);
            setPicture(res.data.picture);
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
      <div className="container-md text-center">
        <div className="row">
          <div className="text-center mt-3">
          <h1 className="greeting-font">Your very own Profile:</h1>
          </div>
          <div className="col-sm-12 transparent-bg my-3 mx-auto" style={{width:"85%", height:"75vh"}}>
          
              <div className="justify-content my-5 row">
                <img
                  src={picture ? picture : emptyProfilePicture}
                  alt="profilepic"
                  className="rounded-circle img-fluid mt-3 mx-auto"
                  style={{ width: "150px", height:"150px" }}
                />
              </div>

              

              <form className="text-center">
                <div>
                  <input className="my-3 form-control mx-auto" value={userName} style={{ width: "50%", minWidth: "15rem"}} />
                </div>
                <br />
                <div>
                  <input type="email" className="mb-5 form-control mx-auto" value={eMail} style={{ width: "50%", minWidth: "15rem"}}/>
                </div>
                
              </form>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
