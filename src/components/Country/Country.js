import React from 'react';

const Country = (props) => {

    console.log(props.country);
    const {name, population, region, flag} = props.country; //destructuring
    const flagStyle = {height:'80px'}

    return (
        <div>
            <h4>This is : {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population :{population}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;