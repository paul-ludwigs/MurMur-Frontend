const Landingpage = () => {
  return (
    <>
      <div className="card" >
      <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        <img
          src={require("../images/landingpage_image.JPG")}
          className="card-img-top image"
          alt="landingpageimage"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Landingpage;
