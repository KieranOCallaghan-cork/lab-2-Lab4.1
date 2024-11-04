// create.js
//this imports the react from the teh js 
import { useState } from "react";
//this is so that a form can be craeted and sent into teh app
function Create() {
    //this is the const so that the the form can be saved once updated 
  const [title, setTitle] = useState('');
  const[year, setYear] = useState('');
  const[poster, setPoster] = useState('');
// this is so the console can have show the user that the information is been saved 
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(year);
    console.log(poster);
  }
   
  
//this is going to be the main part of the html, it showed the form and also that the information can be stored
  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/**this is the form below so that it can be stored and also shows that it will be shown */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          {/**above is where form will be saved and also changed */}
        </div>
        <div>
            {/**this is the form below so that it can be stored and also shows that it will be shown */}
            <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
            {/**above is where form will be saved and also changed */}
        </div>
        <div>  
            {/**this is the form below so that it can be stored and also shows that it will be shown */}
         <label>Add Movie Poster URL: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
          {/**above is where form will be saved and also changed */}
          </div>

            {/**This is where the button will summit the input data*/}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}
// exports the create
export default Create;