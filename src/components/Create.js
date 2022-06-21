import React from 'react'

function Create() {
  return (
    <>
      <div className="text-center mb-3">
       <h1>Create a new MurMur!</h1>
       <h2>We are eager to hear about what you want to share!</h2>
     </div>
      <form>

        <div className="text-center mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            City
          </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Tokyo" />
        </div>

        <div className="container mx-auto text-center mt-3">          
          <button type="button" className="btn btn-sm btn-primary mt-2 mx-1 active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">
            Food+Drink
          </button>
          <button type="button" className="btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Location
          </button>
          <button type="button" className="btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Sport+Activity
          </button>
        </div>
        <div className="container mx-auto text-center mt-1  mb-2">          
          <button type="button" className="btn btn-sm btn-primary mt-2 mx-1 active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">
            Event
          </button>
          <button type="button" className="btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            General
          </button>
          <button type="button" className="btn btn-sm btn-primary mt-2 mx-1" data-bs-toggle="button" autocomplete="off">
            Warning
          </button>
        </div>




        <div className="text-center mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            You can enter your Tip below
          </label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div className="text-center">
        <button type="submit" className="btn btn-info mb-3 mt-5">
          Submit
        </button>
      </div>
      </form>
    </>
  )
}

export default Create