import { useState, useEffect } from 'react';
import { fetchMoviesByGenre } from '../services/api';
import MovieCard from './MovieCard';
import './RelatedMovies.css';

const RelatedMovies = ({ genre, currentMovieId }) => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRelatedMovies = async () => {
      if (!genre) return;

      setLoading(true);
      setError(null);

      try {
        const data = await fetchMoviesByGenre(genre);
        const filtered = data.filter((movie) => movie.id !== currentMovieId).slice(0, 4);
        setRelatedMovies(filtered);
      } catch (err) {
        setError('Error al cargar películas relacionadas');
      } finally {
        setLoading(false);
      }
    };

    loadRelatedMovies();
  }, [genre, currentMovieId]);

  if (loading) {
    return <div className="related-loading">Cargando películas relacionadas...</div>;
  }

  if (error) {
    return <div className="related-error">{error}</div>;
  }

  if (relatedMovies.length === 0) {
    return null;
  }

  return (
    <div className="related-movies">
      <h2 className="related-movies-title">Películas Relacionadas</h2>
      <div className="related-movies-grid">
        {relatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
