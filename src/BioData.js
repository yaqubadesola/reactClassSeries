import React from 'react';

function BioData({data}) {
    const {name, age, address, level} = data
   
    return (
        <tr key={level}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
            <td>{level}</td>
        </tr>
    );
}

export {BioData};