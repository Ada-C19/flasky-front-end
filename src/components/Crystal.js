import React from 'react';

// The following works when 'const name = "Amethyst" is deleted
// const Crystal = ({name}) => {
const Crystal = ({name}) => {
    // The following also works, but doesn't use destructering.
    // const Crystal = (props) => {
    // const name = props.name;
    // const name = "Amethyst"
    return (
        <li>
            <h2>{name}</h2>
            <p>Crystal Color</p>
            <p>Crystal Powers</p>
            <button>Charge Crystal</button>
        </li>
    );
};

export default Crystal