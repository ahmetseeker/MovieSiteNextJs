const API_URL = "https://api.themoviedb.org/3";

const fetchMovieAPI = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (err) {
    throw new Error(err);
  }

};

const getPopularMovies = async () => {
  return fetchMovieAPI("/movie/popular");
};

const getTopRatedMovies = async () => {
  return fetchMovieAPI("/movie/top_rated");
};

const getCategories = async () => {
  return fetchMovieAPI("/genre/movie/list");
};

const getSingleCategory = async (genreId) => {
  return fetchMovieAPI("/discover/movie", `with_genres=${genreId}`);
};

const getMovie = async (movieId) => {
  return fetchMovieAPI(`/movie/${movieId}`);
};

export {
  fetchMovieAPI,
  getPopularMovies,
  getTopRatedMovies,
  getCategories,
  getSingleCategory,
  getMovie,
};
