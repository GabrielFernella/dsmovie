import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import api from 'services/api';
import './styles.css';

function Listing() {
  const result = api.get('/movies').then((item) => {
    console.log(item.data.content);
  });

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
