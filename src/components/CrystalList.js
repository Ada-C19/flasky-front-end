import React from 'react';
import Crystal from './Crystal';

const CrystalList = ({crystals}) => {
    // 'crystal is just a variable name that can be anyhting'
    const crystalComponents = crystals.map((crystal) => {
        return <Crystal
            id={crystal.id}
            name={crystal.name}
            color={crystal.color}
            powers={crystal.powers}
        />  
    })

    return (
        <section>
            <h2>Crystal List</h2>
            <ul>
            {crystalComponents}
            </ul>
        </section>
    );
};

export default CrystalList;