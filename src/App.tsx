import { useState } from "react";
import "./App.css";

interface Country {
  name: string;
}

const countriesData: Country[] = [
  { name: "India" },
  { name: "USA" },
  { name: "France" },
];

function App() {
  const [selectedCountries, setSelectedCountries] = useState<Set<string>>(
    new Set()
  );
  const allCountries = countriesData.map((country) => country.name);

  const handleCountryClick = (countryName: string) => {
    const updatedSelectedCountries = new Set(selectedCountries);

    updatedSelectedCountries.has(countryName)
      ? updatedSelectedCountries.delete(countryName)
      : updatedSelectedCountries.add(countryName);

    setSelectedCountries(updatedSelectedCountries);
  };

  const handleSelectAll = () =>
    setSelectedCountries(
      selectedCountries.size === allCountries.length
        ? new Set()
        : new Set(allCountries)
    );
    
  return (
    <div className="App">
      <ul>
        <label>
          <input
            type="checkbox"
            checked={selectedCountries.size === allCountries.length}
            onChange={handleSelectAll}
          />
          Select All
        </label>
        {countriesData.map((country, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedCountries.has(country.name)}
                onChange={() => handleCountryClick(country.name)}
              />
              {country.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
