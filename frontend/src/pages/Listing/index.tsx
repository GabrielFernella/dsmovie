import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import api from 'services/api';
import { MoviePage, Movie } from 'types/movie';
import './styles.css';

function Listing() {
  const [movies, setMovies] = useState<Movie>();
  const [moviePage, setMoviePage] = useState<MoviePage>();

  async function getAllMovies() {
    const result = await api.get('/movies').then((item) => {
      setMoviePage(item.data);
      console.log(item.data);
    });
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-c1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-c1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-c1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-c1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-c1-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
