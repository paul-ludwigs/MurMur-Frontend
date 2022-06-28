import React from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { HashLoader } from 'react-spinners';

function Overview() {
const api = process.env.REACT_APP_API_URL;
const pageItems = 10;
const { cityname } = useParams();

// capitalize the first letter of the cityname:
const citynameCap = cityname.charAt(0).toUpperCase() + cityname.slice(1);

// declare States
const [ data, setData ] = useState([]);
const [ filter, setFilter ] = useState([]);
const [ filteredData, setFilteredData ] = useState([]);
const [mumurPerPage, setMurmurPerPage] = useState(pageItems);
const [isFetching, setIsFetching] = useState(true);

// create helper arrays for filter
let indexArray=[];
let filteredObjects = [];

//fetch data in effect:
useEffect(() => {
  if(data.length <= 0){
  axios.get(`${api}/murmur/${cityname}`)
  .then((res) => {
    setData(res.data);
    setFilteredData(res.data)
    setIsFetching(false)
  })
  .catch((error) => {
    console.log(error)
    setIsFetching(false);
  });
}}, []);

// button pushes or splices its name into/from filter array:
const handleClick = function (event) {
  let placeholderArray = filter;
  if(placeholderArray.includes(event.target.innerText)){
       const index = placeholderArray.findIndex(element => element == event.target.innerText);    
       placeholderArray.splice(index, 1);
       setFilter(placeholderArray);
       newData();
       
     } else {    
      placeholderArray.push(event.target.innerText);
         setFilter(placeholderArray);
         newData();
       };
  setMurmurPerPage(pageItems);      
};

const newData = function () {
  // find index of object in initial fetch-array if filter matches, save index in indexArray
  data.map((item, index) => item.tags.map((entry) => {    
    if(filter.includes(entry) && !indexArray.includes(index)){
      indexArray.push(index);   
    };
  }));
    if(indexArray.length > 0){
      setFilteredData([]);
      indexArray.map(arrayIndex =>{
        filteredObjects.push(data[arrayIndex]);
        setFilteredData(filteredObjects);
      })
    } else if(filter.length == 0){
      setFilteredData(data);      
    } else {
      filteredObjects = [];
      setFilteredData(filteredObjects);
    };
};

const showMoreHandler = (e) => {
  setMurmurPerPage(mumurPerPage + pageItems);
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



        {isFetching ? <HashLoader color="#41caea" /> : filteredData.length > 0 ? (
          <>
          {
          filteredData.map((item, index) => (
            (index < mumurPerPage) && (
           
        <div className="container" key={index}>
            <div className="card" style={{width: "18rem;"}}>
              
                <p className="float-left">{item.tags}</p>
                
                <p className="float-right">{item.upvotes.length}</p>
                {item.picture  &&
            <img src={item.picture} className="card-img-top" alt="city_picture"/>}
            <div className="card-body">

              <p className="card-text">{item.tip}</p>
              <Link to={`${item._id}`} className="btn">Select</Link>
            </div>
          </div>
          </div>        
          
      )))}
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

  )
}
export default Overview