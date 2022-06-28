import React from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const api = process.env.REACT_APP_API_URL;

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async function (event) {
    event.preventDefault();
    const accountName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const repeatPassword = event.target[3].value;

    if (!accountName || !email || !password || !repeatPassword) {
      toast("Please fill out all forms!");
    } else if (password !== repeatPassword) {
      toast("Your passwords don't match!");
    } else {
      const newUser = {
        username: accountName,
        email: email,
        password: password,
        picture: "",
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/users/register`,
          newUser
        );
        const token = res.headers.authorization;
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isAuthenticated) return <Navigate to="../search" />;

  return (
    <>
    <ToastContainer />
      <div className="container-md text-center">
        <div className="row">
          <div className="col-sm-12">
            
          <div className="plane">
            <div
              className="d-flex justify-content-center mt-5 register-card mb-5 "
              
            >
              <form onSubmit={handleSubmit} className="mt-5 mb-3">
                <div className="text-center mb-3 row mb-20">
                  <label
                    htmlFor="Accountname"
                    className="col-sm-2 col-form-label"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="Accountname"
                      placeholder="Accountname"
                    />
                  </div>
                </div>

                <div className="text-center mb-3 row mt-3 mb-20">
                  <label
                    htmlFor="registerEmail"
                    className="col-sm-2 col-form-label"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email@example.com"
                      id="registerEmail"
                    />
                  </div>
                </div>

                <div className="text-center mb-3 row mb-20">
                  <label htmlFor="Password" className="col-sm-2 col-form-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-key-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder="password"
                    />
                  </div>
                </div>

                <div className="text-center mb-3 row mb-20">
                  <label
                    htmlFor="repeatPassword"
                    className="col-sm-2 col-form-label"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-key"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="repeatPassword"
                      placeholder="repeat password"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-info mb-3 mt-5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Register;
