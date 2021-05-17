import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/MovieCard.css";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img src={imagePath} alt="foto do filme" />
        <div className="content">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <footer>
          <p>{ rating }</p>
          <Link to={`movies/${movie.id}`}>VER DETALHES</Link>
        </footer>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default MovieCard;
