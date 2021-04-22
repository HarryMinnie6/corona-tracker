//Helpers used in projects
import React from "react";
import numeral from "numeral"; //used to format numbers in a certain way
//features from react leaflet
import { Circle, Popup } from "react-leaflet";

//this function is used in App.js to sort countries in order of number of cases
export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else return 1;
  });
  return sortedData;
};

//
export const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

//used for the circle colors on map depending on case type (recovered, deaths, cases)
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 300
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 300
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 500
  }
};

// drawing interactive circles on the map
export const showDataOnMap = (data, casesType = "cases") => {
  return data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      //with radius: more cases means bigger circle on map
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <h3 className="info-name">{country.country} </h3>
          <div className="info-cases">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};

//making stats nice in the 3 info boxes

export const lookNiceStats = (stat) => {
  return stat ? `+${numeral(stat).format("0,0a")}` : "0+";
};
