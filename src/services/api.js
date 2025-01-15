import axios from "axios";
const API_Key = `f4f114951939468c2b77438140c3fb0c`;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGYxMTQ5NTE5Mzk0NjhjMmI3NzQzODE0MGMzZmIwYyIsIm5iZiI6MTczNjg3MDIwNS43ODU5OTk4LCJzdWIiOiI2Nzg2ODkzZDJiMWU0MGU4M2ZiYjE0NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Nz2ib_8UAY_-BsqKHqLwVqtfAkRXm63d53dWD7ScRPE`,
  },
};
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, options);
  return data.results;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&page=${page}`,
    options
  );
  return data;
};
export const fetchMoviesDetails = async (movieId) => {
  const { data } = await axios(`movie/${movieId}`, options);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios(`movie/${movieId}/credits`, options);
  return data;
};

export const fetchMovieRewiews = async (movieId) => {
  const { data } = await axios(`movie/${movieId}/reviews`, options);
  return data;
};
