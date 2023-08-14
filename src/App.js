import './App.css';
import Nav from "./components/Nav"
// import Child from "./components/Child";
import Movie from "./components/Movie";
import movieImg1 from './assets/images/movie-1.png'; // Tell webpack this JS file uses this image
import movieImg2 from './assets/images/movie-2.png'; // Tell webpack this JS file uses this image
import movieImg3 from './assets/images/movie-3.png'; // Tell webpack this JS file uses this image


function App() {

  return (
    <>
    <Nav/>
      <h1>Movie app</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">

      <Movie movieImage={movieImg1} movTitle="Airplane" year="1990" genDescription="Description of what a comedy is since it's in Genre?" genName="Comedy" genTitle1="Title ONE of genre, since it's in Genre?" genTitle2="Title TWO of genre, since it's in Genre?"/>
      <Movie movieImage={movieImg2} movTitle="Casablanca" year="1962" genName="Romance" />
      <Movie movieImage={movieImg3} movTitle="Dumb and Dumber" year="2004" genName="Comedy" />

         {/* <Movie movTitle="Airplane" year="1990" genDescription="Description of what a comedy is since it's in Genre?" name="Comedy" />
         <Movie movTitle="Casablanca" year="1962" genDescription="Description of what a comedy is since it's in Genre?" name="Romance" />
         <Movie movTitle="Dumb and Dumber" year="2004" genDescription="Description of what a comedy is since it's in Genre?" name="Codedy" />        */}
      </div>
    </>
  );
}


export default App;




// // App.js

// function App() {


//   return (
//     <div>
//       <Nav />

//       <h1>Movie app</h1>
//       <Child firstName="Tom" />

//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         <Movie title={Movies[0].Name} year="1990" description="Don't even wanna talk about it." name="Comedy" />
//         <Movie title="Lone Ranger" year="1962" description="A man riding cow befriends an indian." name="Romance" />
//         <Movie title="SpongeBob" year="1990" description="Documentary about city life ." name="Romance" />
//       </div>
//     </div>
//   );
// }

// export default App;
