import { useState } from 'react';
import data from './MovieData.json';

const MD = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(MD);

  const addMovie = () => {
    setListOMovies([
      ...MD,
      {
        Category: 'Commedy',
        Title: 'HotRod',
        Year: 2000,
        Director: '',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div className="w-50 mx-auto">
        <h2>Joel Hilton's Movie Collection</h2>
        <br />
        <br />
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Direction</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
