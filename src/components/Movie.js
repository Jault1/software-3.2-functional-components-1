import movieImg1 from './../assets/images/movie-1.png'; // Tell webpack this JS file uses this image
import movieImg2 from './../assets/images/movie-2.png'; // Tell webpack this JS file uses this image
import movieImg3 from './../assets/images/movie-3.png'; // Tell webpack this JS file uses this image
import movieThumb from './../assets/images/movie-thumb.png'; // Tell webpack this JS file uses this image
import Genre from "./../components/Genre";
// import Card from "./../components/Container";

function Movie({ movieImage, movTitle, year, petType, genName, genDescription, genTitle1, genTitle2 }) {
  return (

<div className="col">
<div className="card h-100">
<img src={movieImage} className="card-img-top" alt="Movie Image"/>
{/* <h3>{movieImage}</h3> */}
  <div className="card-body">
    <h5 className="card-title movie">{movTitle} -   {year}</h5>
  </div>
  <div className="card-footer">
  <Genre type={petType} genName={genName} genDescription={genDescription} genTitle1={genTitle1} genTitle2={genTitle2}/>
  </div>
</div>
</div>


  );
}

export default Movie;