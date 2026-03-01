import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/pelicula/${movie.id}`} className="movie-card">
      <div className="movie-card-image">
        <img
          src={movie.image_url || 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="movie-card-meta">
          <span className="movie-card-year">{movie.year}</span>
          {movie.genre && <span className="movie-card-genre">{movie.genre}</span>}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
