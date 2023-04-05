import { useEffect, useState } from 'react';
//import data from './MovieData.json';
import { Movie } from './movie';

//const MD = data.MovieData;

function MovieList() {
  //const [listOMovies, setListOMovies] = useState(MD);

  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  // const addMovie = () => {
  //   setListOMovies([
  //     ...MD,
  //     {
  //       Category: 'Commedy',
  //       Title: 'HotRod',
  //       Year: 2000,
  //       Director: '',
  //       Rating: 'PG-13',
  //       Edited: 'No',
  //     },
  //   ]);
  // };

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
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
