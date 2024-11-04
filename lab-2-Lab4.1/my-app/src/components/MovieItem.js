// this is the new componant called movieitem that will get information from another componant
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  //this is the new way to use the blobs
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes
 // this is where it displays the output and that it has goten from the comp movie, as it has the data there
  return (
    <div>
      <Card>
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
            {/**above is the bones of the card that will make the whole page looking nice */}
            {/** Whilst down below is where the main data will be taken and displayed out */}
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
  //above is where teh data will be displayed at the end
}
// this is where it will be exported to the main page
export default MovieItem;


