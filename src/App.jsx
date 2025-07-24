import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Data from './data.json';
import Search from '../src/assets/design/search.png'; 

function App() {


  const [darkMode, setDarkMode] = useState(false);

  const [countries, setCountries] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState('');

  const [searchInput, setSearchInput] = useState('');

  const [filteredCountries, setFilteredCountries] = useState([]);
  
 
    useEffect(() => {
        // Fetching data from the JSON file
        setCountries(Data);
        setFilteredCountries(Data);
     
    }, [])

    useEffect(() => {
      let filtered = countries;
      if (selectedRegion) {
        filtered = filtered.filter((country) => country.region.toLowerCase() === selectedRegion.toLowerCase());
      }
      if (searchInput) {
        filtered = filtered.filter((country) => country.name.toLowerCase().includes(searchInput.toLowerCase()));
      }
      setFilteredCountries(filtered);
    },[selectedRegion, searchInput, countries]);

    const handleChange = (e) => {
      setSelectedRegion(e.target.value);
    }

    const handleSearch = (e) => {
      setSearchInput(e.target.value);
      
    }
    
  return (
    <div className='' >
      <Header darkMode={darkMode}
              setDarkMode={setDarkMode} />
      <div>
        <div className="landing-page md:flex justify-between items-center py-10 md:px-20 sm:px-10 px-5 ">
              <div className='flex relative items-center md:my-0 my-5'>
                <img className='absolute left-4 w-5' src={Search} alt="" />
                <input className="shadow-xl py-2 px-20 rounded-xl md:w-100 w-auto 
                                focus:outline-none focus:ring-2 focus:ring-[#808080ff]" 
                                type="search"
                                placeholder="Search for a country..."
                                value={searchInput} 
                                onChange={handleSearch}/>
              </div>
                <select className='shadow-xl rounded-md focus:outline-none
                                    focus:ring-2 focus:ring-[#ffffffff] text-sm
                                    px-4 py-1 bg-[#fcfcfcff] cursor-pointer'
                                    value={selectedRegion} onChange={handleChange}>
                    <option value="">Filter by region </option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceana">Oceania</option>
                </select>
        </div>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                        lg:grid-cols-4 gap-10 md:px-20 sm:px-10 px-5'>
          {
          filteredCountries.map((country, index) => (
              <div className='border-none rounded-xl shadow-md
                              inline-block transition-transform
                              duration-500 ease-in-out hover:scale-110
                              hover:shadow-lg lg:w-auto' key={index}>
                <img className='rounded-t-xl mb-3 md:w-auto w-100' src={country.flags.png} alt="img" />
                <div className='py-4 lg:px-8 md:px-4 px-5'>
                  <h2 className='font-bold md:text-2xl text-xl'>{country.name}</h2>
                  <div className='my-4'>
                    <p className='md:text-md text-base'><strong>Population:</strong> {country.population}</p>
                    <p className='md:text-md text-base'><strong>Region: </strong>{country.region}</p>
                    <p className='md:text-md text-base'><strong>Capital: </strong>{country.capital}</p>
                  </div>
                </div>
              </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
