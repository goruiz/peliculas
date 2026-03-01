import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import RelatedMovies from '../components/RelatedMovies';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (err) {
        setError('Error al cargar la película. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="movie-detail-container">
        <div className="loading">Cargando película...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-detail-container">
        <div className="error">{error}</div>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-detail-container">
        <div className="error">Película no encontrada</div>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="movie-detail-content">
        <div className="movie-detail-poster">
          <img
            src={movie.image_url || 'https://via.placeholder.com/400x600?text=No+Image'}
            alt={movie.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x600?text=No+Image';
            }}
          />
        </div>

        <div className="movie-detail-info">
          <h1 className="movie-detail-title">{movie.title}</h1>

          <div className="movie-detail-meta">
            {movie.year && <span className="meta-item">📅 {movie.year}</span>}
            {movie.genre && <span className="meta-item genre">🎭 {movie.genre}</span>}
          </div>

          {movie.stars && (
            <div className="movie-detail-rating">
              ⭐ {movie.stars}/5
            </div>
          )}

          {movie.description && (
            <div className="movie-detail-section">
              <h2>Sinopsis</h2>
              <p className="movie-detail-plot">{movie.description}</p>
            </div>
          )}
        </div>
      </div>

      {movie.genre && <RelatedMovies genre={movie.genre} currentMovieId={movie.id} />}
    </div>
  );
};

export default MovieDetail;
