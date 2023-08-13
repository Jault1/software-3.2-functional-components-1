// The Container component would have the following:
//  CONTAINER
//   - [HEADER] for "Movie app"
//   - 2 Genres with information for the follwing:
//   - comedy and romance genre
//   - descriptions and the two movies titles are up to the user

function Container({ children }) {
    return (
        <div className="col">
        <div className="card h-100">
        {/* <img src={movieImg2} className="card-img-top" alt="Movie Image"/> */}
          <div className="card-body">
            <h5 className="card-title movie">Movie Title</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">
                <hr />
            {children}</small>
          </div>
        </div>
      </div>

    );
  }
  export default Container;