function Genre({ type, genName, genDescription, genTitle1, genTitle2}) {
    return (
      <>
        <p>Genre: {genName}</p>
        <ul>
        <li><small class="em">Description: {genDescription}</small></li>
        <li><small class="em">Genre Title 1: {genTitle1}</small></li>
        <li><small class="em">Genre Title 2: {genTitle2}</small></li>
        </ul>
      </>
    );
  }
  export default Genre;


// function Genre(props) {
//     return (
//         <div>
//         <small className="text-muted genre">{props.name} | {props.description} - Passed from Genre.</small>
//         <small className="text-muted genre">{props.movieTitle1} | {props.movieTitle2}</small>
//         </div>
//     )
//   }
    

