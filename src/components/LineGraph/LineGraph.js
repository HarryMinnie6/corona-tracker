import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import showDataOnMap from "../../utilities";

const casesTypeColors = {
  cases: {
    hex: "rgb(204,16,52)",
    fill: "rgb(204,16,52, 0.5)",
    multiplier: 300
  },
  recovered: {
    hex: "#7dd71d",
    fill: "rgb(125,215,29, 0.5)",
    multiplier: 300
  },
  deaths: {
    hex: "rgb(57,57,57)",
    fill: "rgb(57,57,57, 0.5)",
    multiplier: 700
  }
};

const options = {
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll"
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          }
        }
      }
    ]
  }
};

//
const buildChartData = (data, casesType) => {
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

function LineGraph({ casesType = "cases", ...props }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
          console.log(chartData);
          // buildChart(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div className={props.className}>
      {/* if their is no data from the useEffect fetch, it will return an undefined */}
      {data?.length > 0 && (
        <Line
          className="lineGraph"
          data={{
            datasets: [
              {
                backgroundColor: `${casesTypeColors[casesType].fill}`,
                borderColor: `${casesTypeColors[casesType].hex}`,
                data: data
              }
            ]
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
