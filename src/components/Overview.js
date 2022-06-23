import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Overview() {
const api = process.env.REACT_APP_API_URL;
const { cityname } = useParams();
const citynameCap = cityname.charAt(0).toUpperCase() + cityname.slice(1);

const [ filter, setFilter ] = useState([]);

useEffect(() => {
  axios.get(`${api}/murmur/${cityname}`)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

}, []);

  return (
    <>
    <div className="text-center city-name"><h1>{citynameCap}</h1></div>

    <div className="container mx-auto text-center mt-3">          
          <button type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1 active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">
            Food+Drink
          </button>
          <button type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Location
          </button>
          <button type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Sport+Activity
          </button>
        </div>
        <div className="container mx-auto text-center mt-1  mb-2">          
          <button type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1 active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">
            Event
          </button>
          <button type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            General
          </button>
          <button type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Warning
          </button>
        </div>
      </>



  )
}

export default Overview