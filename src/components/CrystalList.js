import React from 'react';
import Crystal from './Crystal';
import ProptTypes from 'prop-types';

const CrystalList = ({crystals}) => {
    // 'crystal is just a variable name that can be anyhting'
    const crystalComponents = crystals.map((crystal) => {
        return (
            // this key is for react to use under the hood, the key value can't be accessed, it's just for react to keep track of it
            // could also use <li key={index}>
                <li key={crystal.id}>
                    <Crystal
                        id={crystal.id}
                        name={crystal.name}
                        color={crystal.color}
                        powers={crystal.powers}
                    />  
            </li>
        );
    })

    return (
        <section>
            <h2>Crystal List</h2>
            <ul>{crystalComponents}</ul>
        </section>
    );
};

// CrystalList.propTypes = {
//     crystals: ProptTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             color: PropTypes.string.isRequired,
//             powers: PropTypes.string.isRequired,
//         })
//     )
// }
export default CrystalList;