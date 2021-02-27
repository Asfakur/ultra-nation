import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country; //destructuring
    const flagStyle = {height:'80px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle}>
            <h4>This is : {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population :{population}</p>
            <p>Region: {region}</p>
            <button onClick={()  => handleAddCountry(props.country)}>Add country</button>

        </div>
    );
};

export default Country;