import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import { FormControl, MenuItem, Select } from "@material-ui/core";

import Table from "./components/Table/Table";
import Map from "./components/Map/Map";
import Infobox from "./components/InfoBoxes/InfoBox";
import LineGraph from "./components/LineGraph/LineGraph";
import { sortData } from "./utilities";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.08, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const gettingCountryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // country names such as South Africa, United Kingdom etc
            value: country.countryInfo.iso2 // abbreviations such as RSA, USA, UK etc
          }));
          //ordering countries by most number of cases
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
          //setting mapCountries to all the data from the fetch above. we need all the data
          setMapCountries(data);
        });
    };
    gettingCountryData();
  }, [countries]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    // setting state for the country...

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
        // console.log(">>><<", data.countryInfo.lat);
      });

    console.log("country info >> ", countryInfo);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="header">
          <h1>Covid-19 Tracker</h1>
          <FormControl>
            <Select
              className="header__selectBox"
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              {/* Worldwide option */}
              <MenuItem value="worldwide"> WorldWide</MenuItem>

              {/* Renders all the countries */}
              {countries.map((country) => (
                <MenuItem value={country.value}> {country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="statistics">
          <Infobox
            title="CoronaVirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <Infobox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <Infobox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <Map center={mapCenter} zoom={mapZoom} countries={mapCountries} />
      </div>
      <div className="app__right">
        <Card>
          <CardContent>
            <h3>Live Cases By country</h3>
            <Table countries={tableData} />
            <h3>World Wide New Cases</h3>
            <LineGraph casesType={casesType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
