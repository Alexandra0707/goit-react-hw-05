import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
