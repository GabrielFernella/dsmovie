import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from 'services/api';
import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movieId: string;
};

function FormCard({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    score: 0,
    count: 0,
    image: '',
  });

  async function getMovie(id: string) {
    await api.get(`/movies/${id}`).then((item) => {
      setMovie(item.data);
      console.log(item.data);
    });
  }

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  return (
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="dsmovie-form">
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to={`/`}>
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
