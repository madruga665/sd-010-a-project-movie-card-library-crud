import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './styles/MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { id } = this.props;
    const { getMovie } = movieAPI;
    const data = await getMovie(id);
    this.setState({ movies: data, loading: false });
  };

  deleteMovie = async () => {
    const { id } = this.props;
    const { deleteMovie } = movieAPI;
    const data = await deleteMovie(id);
    return data;
  };

  render() {
    const { loading, movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    const { id } = this.props;

    if (loading) return <Loading />;

    return (
      <section className="movie-details-container" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="movie-details-content">
          <h4>{title}: {subtitle}</h4>
        <div className="genre-rating">
          <p>{genre} </p>
          <p>{rating}</p>
        </div>
          <h4>Storyline:</h4>
          {storyline}
        </div>
        <div className="buttom-container">
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.deleteMovie() }>DELETAR</Link>
        </div>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
