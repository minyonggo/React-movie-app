import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

function Moive({ title, year, summary, poster, genres }) {
    
    return (
        <div className="movie">
            <h2 className="movie_title">{title}</h2>
            <h3 className="movie_year">{year}</h3>
            <p className="movie_summary">{summary.slice(0,200)}...</p>
            <ul className="genres">
                {genres.map( (genre, index) => (
                    <li key={index} className="genre">{genre}</li>
                ))}
            </ul>
            <img className="movie_poster" src={poster} alt={"poster image of"+title} />
        </div>
    );
}

Moive.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Moive;