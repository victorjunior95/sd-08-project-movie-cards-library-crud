import data from './movieData';

localStorage.setItem('movies', JSON.stringify(data));

const readMovies = () => JSON.parse(localStorage.getItem('movies'));

const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

export const getMovies = () => (
  new Promise((resolve) => {
    const twothousand = 2000;
    setTimeout(() => {
      const movies = readMovies();
      resolve(movies);
    }, twothousand);
  })
);

export const getMovie = (movieId) => {
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));

  return new Promise((resolve) => {
    const twothousand = 2000;
    setTimeout(() => {
      resolve(movie);
    }, twothousand);
  });
};

export const updateMovie = (updatedMovie) => {
  const movies = readMovies().map((movie) => {
    if (movie.id === parseInt(updatedMovie.id, 10)) {
      return { ...movie, ...updatedMovie };
    }
    return movie;
  });
  saveMovies(movies);

  return new Promise((resolve) => {
    const thousand = 1000;
    setTimeout(() => {
      resolve('OK');
    }, thousand);
  });
};

export const createMovie = (movieData) => {
  let movies = readMovies();
  const nextId = movies[movies.length - 1].id + 1;
  const newMovie = { ...movieData, id: nextId };
  movies = [...movies, newMovie];
  saveMovies(movies);

  return new Promise((resolve) => {
    const nineHundred = 900;
    setTimeout(() => {
      resolve('OK');
    }, nineHundred);
  });
};

export const deleteMovie = (movieId) => {
  let movies = readMovies();
  movies = movies.filter((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    const thousand = 1000;
    setTimeout(() => {
      resolve({ status: 'OK' });
    }, thousand);
  });
};
