import movieImg2 from './../assets/images/movie-2.png'; // Tell webpack this JS file uses this image
import Genre from "./../components/Genre";
import Card from "./../components/Card";

function Movie({ movTitle, year, petType, genName, genDescription, genTitle1, genTitle2 }) {
  return (


<div className="col">
<div className="card h-100">
<img src={movieImg2} className="card-img-top" alt="Movie Image"/>
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