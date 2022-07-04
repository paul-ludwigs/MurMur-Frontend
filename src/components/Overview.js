import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

function Overview() {
  const api = process.env.REACT_APP_API_URL;
  const pageItems = 10;
  const { cityname } = useParams();

  // capitalize the first letter of the cityname:
  const citynameCap = cityname.charAt(0).toUpperCase() + cityname.slice(1);

  // declare States
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [mumurPerPage, setMurmurPerPage] = useState(pageItems);
  const [isFetching, setIsFetching] = useState(true);

  // create helper arrays for filter
  let indexArray = [];
  let filteredObjects = [];

  //fetch data in effect:
  useEffect(() => {
    if (data.length <= 0) {
      axios
        .get(`${api}/murmur/${cityname}`)
        .then((res) => {
          setData(res.data);
          setFilteredData(res.data);
          setIsFetching(false);
        })
        .catch((error) => {
          setIsFetching(false);
        });
    }
  }, []);

  // button pushes or splices its name into/from filter array:
  const handleClick = function (event) {
    let placeholderArray = filter;
    if (placeholderArray.includes(event.target.innerText)) {
      const index = placeholderArray.findIndex(
        (element) => element == event.target.innerText
      );
      placeholderArray.splice(index, 1);
      setFilter(placeholderArray);
      newData();
    } else {
      placeholderArray.push(event.target.innerText);
      setFilter(placeholderArray);
      newData();
    }
    setMurmurPerPage(pageItems);
  };

  const newData = function () {
    // find index of object in initial fetch-array if filter matches, save index in indexArray
    data.map((item, index) =>
      item.tags.map((entry) => {
        if (filter.includes(entry) && !indexArray.includes(index)) {
          indexArray.push(index);
        }
      })
    );
    if (indexArray.length > 0) {
      setFilteredData([]);
      indexArray.map((arrayIndex) => {
        filteredObjects.push(data[arrayIndex]);
        setFilteredData(filteredObjects);
      });
    } else if (filter.length == 0) {
      setFilteredData(data);
    } else {
      filteredObjects = [];
      setFilteredData(filteredObjects);
    }
  };

  const showMoreHandler = (e) => {
    setMurmurPerPage(mumurPerPage + pageItems);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="text-center col">
            <h1 className="cursive-font">{citynameCap}</h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <button
              onClick={handleClick}
              type="button"
              className="tag-button crbutton btn btn-sm btn-primary mt-2 px-1"
              data-bs-toggle="button"
              autocomplete="off"
            ><div className="fa-solid fa-utensils pe-2"></div>
              Food+Drink
            </button>
            <button
              onClick={handleClick}
              type="button"
              className="tag-button crbutton btn btn-sm btn-primary mt-2 ms-1"
              data-bs-toggle="button"
              autocomplete="off"
            ><div className="fa-solid fa-location-dot pe-2"></div>
              Location
            </button>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <button
              onClick={handleClick}
              type="button"
              className="tag-button crbutton btn btn-sm btn-primary mt-2"
              data-bs-toggle="button"
              autocomplete="off"
            ><div className="fa-solid fa-cubes-stacked pe-2"></div>
              General
            </button>
            <button
              onClick={handleClick}
              type="button"
              className="tag-button crbutton btn btn-sm btn-primary mt-2 ms-1"
              data-bs-toggle="button"
              autocomplete="off"
            ><div className="fa-solid fa-skull-crossbones pe-2"></div>
              Warning
            </button>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <button
              onClick={handleClick}
              type="button"
              className="tag-button crbutton btn btn-sm btn-primary mt-2"
              data-bs-toggle="button"
              autocomplete="off"
            ><div className="fa-solid fa-volleyball pe-2"></div>
              Sport+Activity
            </button>
            <button
              onClick={handleClick}
              type="button"
              className="tag-button crbutton btn btn-sm btn-primary mt-2 ms-1"
              data-bs-toggle="button"
              autocomplete="off"
            ><div className="fa-solid fa-calendar-check pe-2"></div>
              Event
            </button>
          </div>
        </div>
      </div>
      <br />

      {isFetching ? (
        <HashLoader color="#41caea" />
      ) : filteredData.length > 0 ? (
        <>
          {filteredData.map(
            (item, index) =>
              index < mumurPerPage && (
                <div className="d-flex justify-content-center">
                <div
                  className="card transparent-bg my-2 mx-3"
                  style={{ width: "18rem;" }}
                  key={index}
                >
                  {item.picture && (
                    <img
                      src={item.picture}
                      className="card-img-top"
                      alt="city_picture"
                    />
                  )}
                  
                    <div className="row">
                      <div className="d-flex justify-content-between">
                        <p className="mx-2">{item.tags}</p>

                        <p className="mx-2"><i className="fa-solid fa-thumbs-up">{item.upvotes.length}</i></p>
                      </div>
                    </div>

                    <p className="card-text">{item.tip}</p>
                    <Link to={`${item._id}`} className="btn mx-auto mb-2" style={{ width: "25%"}}>
                      Select
                    </Link>
                  </div>
                  </div>
              )
          )}
          {mumurPerPage < filteredData.length && (
            <div>
              <button onClick={showMoreHandler}>Show more</button>
            </div>
          )}
        </>
      ) : (
        <div> No match found...</div>
      )}
    </>
  );
}
export default Overview;
