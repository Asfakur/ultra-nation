import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h4>This is : {props.country.name}</h4>
        </div>
    );
};

export default Country;