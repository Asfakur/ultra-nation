import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setCountry] = useState([]);

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddCountry = (country) => {
    const newSelectedCountry = [...selectedCountry, country];
    setCountry(newSelectedCountry);
  }

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country added: {selectedCountry.length}</h4>
      <Cart cart={selectedCountry}></Cart>
      <ul>
        {
          countries.map(countryElement =><Country country={countryElement} handleAddCountry={handleAddCountry} key={countryElement.alpha3Code}></Country> )
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
