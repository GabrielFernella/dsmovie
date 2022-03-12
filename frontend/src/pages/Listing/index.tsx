import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import api from 'services/api';
import { MoviePage } from 'types/movie';
import './styles.css';

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [moviePage, setMoviePage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  async function getAllMovies() {
    await api.get(`/movies?size=12&page=${pageNumber}`).then((item) => {
      setMoviePage(item.data);
      console.log(item.data);
    });
  }

  useEffect(() => {
    getAllMovies();
  }, [pageNumber]);

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          {moviePage.content.map((item) => (
            <div key={item.id} className="col-sm-6 col-lg-4 col-c1-3 mb-3">
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
