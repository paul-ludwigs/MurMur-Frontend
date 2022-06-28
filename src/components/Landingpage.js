import {Link} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landingpage = () => {
  const api = process.env.REACT_APP_API_URL;
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);


    const handleSubmit = async (e) => {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;
      const loginData = {
       email: email,
       password: password,
      };
      if(!email || !password){
        toast("Please fill out all forms!")
      } else {
          try {
            const res = await axios.post(
              `${api}/users/login`,
              loginData
            );
            console.log(res)
            const token = res.headers.authorization;        
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
          } catch (error) {
            console.log(error);
            toast("Unable to login. Please check your login credentials!")
          }
         }
    };

    if (isAuthenticated === true) return <Navigate to="../search" />;

  return (

    <>
    <ToastContainer />
      <div className="container mx-auto text-center mt-5">
        <p className="card-text">
          Our app gives you tips but also warnings from other travelers. But you
          are also welcome to share your experiences with others.
        </p>

        <img
          src={require("../images/landingpage_image.JPG")}
          className="card-img-top image align-self-center img-thumbnail"
          alt="landingpageimage"
        />

        <div className="card-body">
          <p className="card-text">
            Let's create an account to create a travel tip or planning your
            trip!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
        <div className="mb-3 row mt-3">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="staticEmail"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
          <button type="submit" className="btn btn-info mb-3 mt-5">
            Sign-In
          </button>
        </form>

        {/* Button/Link */}
        <div className="text-center">
          <Link to="/register">
              Register
          </Link>         
        </div>
      </div>
    </>
  );
};

export default Landingpage;
