import React from 'react';
import PropTypes from 'prop-types';

// The following works when 'const name = "Amethyst" is deleted
// const Crystal = ({name}) => {
const Crystal = ({name, color, powers}) => {
    // The following also works, but doesn't use destructering.
    // const Crystal = (props) => {
    // const name = props.name;
    // const name = "Amethyst"
    return (
        <li>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            <button>Charge Crystal</button>
        </li>
    );
};

// labeling prop types is just to help accessibility
// it doesn't cause errors if there are no props passed in
Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
} 
export default Crystal;
