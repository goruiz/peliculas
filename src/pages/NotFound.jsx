import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Página no encontrada</h2>
        <p className="notfound-text">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <button className="notfound-button" onClick={() => navigate('/')}>
          Volver al Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
