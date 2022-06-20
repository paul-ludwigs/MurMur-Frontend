import {Link} from "react-router-dom";

const Landingpage = () => {
  return (

    <>
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
        <div className="mb-3 row mt-3">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
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

        {/* Button/Link */}
        <div className="text-center">
          <button type="button" className="btn btn-info mb-3 mt-5">
            Sign-In
          </button>
          <div>
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
