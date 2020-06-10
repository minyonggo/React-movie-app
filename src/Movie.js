import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

function Moive({ title, year, summary, poster }) {
    
    return (
        <div className="movie">
            <h2 className="movie_title">{title}</h2>
            <h3 className="movie_year">{year}</h3>
            <p className="movie_summary">{summary}</p>
            <img className="movie_poster" src={poster} alt={"poster image of"+title} />
        </div>
    );
}

Moive.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
}

export default Moive;