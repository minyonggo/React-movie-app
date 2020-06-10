import React from 'react';
import PropTypes from 'prop-types';

function Moive({ title, year, summary, poster }) {
    
    return (
        <div>
            <h2>{title}</h2>
            <h3>{year}</h3>
            <p>{summary}</p>
            <img src={poster} />
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