const BASE_URL = 'https://devsapihub.com/api-movies';

export const fetchAllMovies = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Error al obtener las películas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener la película');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchMoviesByGenre = async (genre) => {
  try {
    const response = await fetch(`${BASE_URL}/genre/${genre}`);
    if (!response.ok) {
      throw new Error('Error al obtener películas por género');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
