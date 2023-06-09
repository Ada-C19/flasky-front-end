import React from 'react';
import Cat from './Cat';

const CatList = () => {
    return (
        <div>
            <h3>Cat List</h3>
            <ul>
                <Cat/>
                <Cat/>
                <Cat/>
                <Cat/>
                <Cat/>
                <Cat/>
                <Cat/>
            </ul>
        </div>
    );
}

export default CatList;