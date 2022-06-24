import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Overview() {
const api = process.env.REACT_APP_API_URL;
const { cityname } = useParams();

// capitalize the first letter of the cityname:
const citynameCap = cityname.charAt(0).toUpperCase() + cityname.slice(1);

const [ data, setData ] = useState([]);
const [ filter, setFilter ] = useState([]);
const [ filteredData, setFilteredData ] = useState([]);
const [ trigger, setTrigger ] = useState(0);
let indexArray=[]

useEffect(() => {
console.log("effect triggered")

  if(data.length <= 0){
  axios.get(`${api}/murmur/${cityname}`)
  .then((res) => {
    setData(res.data);
    setFilteredData(res.data)
  })
  .catch((error) => console.log(error));
}

// zeige nur was passende filter tags hat:


}, [trigger]);

console.log(filteredData)
let murmur = filteredData;

// find index of object in initial fetch-array if filter matches, save index in indexArray
filteredData.map((item, index) => item.tags.map((entry) => {    
  if(filter.includes(entry) && !indexArray.includes(index)){
    indexArray.push(index)    
  };
}));

// button pushes or splices its name into/from filter array:
const handleClick = function (event) {
  let placeholderArray = filter
  if(placeholderArray.includes(event.target.innerText)){
       const index = placeholderArray.findIndex(element => element == event.target.innerText);    
       placeholderArray.splice(index, 1);
       setFilter(placeholderArray);
       
     } else {    
      placeholderArray.push(event.target.innerText);
         setFilter(placeholderArray);
       };       
       setTrigger(trigger+1)
       console.log(filter)
};


  return (
    <>
    <div className="text-center city-name"><h1>{citynameCap}</h1></div>

    <div className="container mx-auto text-center mt-3">          
          <button onClick={handleClick} type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Food+Drink
          </button>
          <button onClick={handleClick} type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Location
          </button>
          <button onClick={handleClick} type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Sport+Activity
          </button>
        </div>
        <div className="container mx-auto text-center mt-1  mb-2">          
          <button onClick={handleClick} type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Event
          </button>
          <button onClick={handleClick} type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            General
          </button>
          <button onClick={handleClick} type="button" className="crbutton btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Warning
          </button>
        </div>

        
        {indexArray.length > 0 ? (
          indexArray.map((item) => (
            
        <div>{data[item]._id}</div>
        
      ))) : murmur ? (
      murmur.map((item) => (
        <div>{item._id}</div>
        )) 
      ) : (
        <div> loading...</div>
      )}



      </>



  )
}

export default Overview