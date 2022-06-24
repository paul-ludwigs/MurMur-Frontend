import React from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

function Overview() {
const api = process.env.REACT_APP_API_URL;
const { cityname } = useParams();


// capitalize the first letter of the cityname:
const citynameCap = cityname.charAt(0).toUpperCase() + cityname.slice(1);

const [ data, setData ] = useState([]);
const [ filter, setFilter ] = useState([]);
const [ filteredData, setFilteredData ] = useState([]);

const id = data._id


useEffect(() => {

  if(data.length <= 0){
  axios.get(`${api}/murmur/${cityname}`)
  .then((data) => {
    setData(data.data);
    setFilteredData(data.data)
  })
  .catch((error) => console.log(error));
}

// zeige nur was passende filter tags hat:

}, []);

console.log(filteredData)
//console.log(data.data);
let murmur = filteredData;
console.log(murmur);



// button pushes or splices its name into/from array:
const handleClick = function (event) {
  
  if(filter.includes(event.target.innerText)){
       const index = filter.findIndex(element => element == event.target.innerText);    
       filter.splice(index, 1);  
     } else {    
         filter.push(event.target.innerText);
       };
       console.log(filter)
  
}





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
        <br/>

        
        {murmur.length >= 0 ? (
          murmur.map((item, index) => (
            <div className="container" key={index}>
            <div className="card" style={{width: "18rem;"}}>
              
                <p className="float-left">{item.tags}</p>
                
                <p className="float-right">{item.upvotes.length}</p>
                
            <img src={item.picture} className="card-img-top" alt="city_picture"/>
            <div className="card-body">
              <p className="card-text">{item.tip}</p>
              <Link to={`${murmur[index]._id}`} className="btn">Select</Link>
              
            </div>
          </div>
          </div>
          
        
      ))) : (
      <div> Loading MurMurs, please wait... </div>
      )}
      



      </>



  )
}

export default Overview