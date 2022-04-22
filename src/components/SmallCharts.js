import React, { useState, useEffect } from "react";
import { Line, Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "./colors";
import numeral from "numeral";
import "./pieStyle.css";

const SmallCharts = (props) => {
  const [newCaseWorldwide, setNewCaseWorldwide] = useState({});
  const [pieData, setPieData] = useState([]);

  const casesType = props.casesType;

  const styles = {
    pieContainer: {
      width: "30%",
      height: "30%",
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)"
    },
    relative: {
      position: "relative"
    }
  };

  const WWOptions = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };

  const pieOptions = {
    legend: { display: true, position: "right" },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  const pieUSAData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["todayCases", "todayDeaths", "todayRecovered"],
    datasets: [
      {
        data: pieData,
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };
  const buildUSAData = (data) => {
    setPieData([])
    setPieData(oldArray => [...oldArray, data.todayCases])
    setPieData(oldArray => [...oldArray, data.todayDeaths])
    setPieData(oldArray => [...oldArray, data.todayRecovered])
  }

  const buildWWData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };


  useEffect(() => {
      const fetchDataWW = async () => {
        await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              let chartData = buildWWData(data, casesType);
              setNewCaseWorldwide(chartData);
            });
      };

      const fetchDataUSA = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries/usa")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              buildUSAData(data);
            });
      };

      fetchDataWW();
      fetchDataUSA();
    }, [casesType]);

  return (
      <div>
          <h3>New worldwide {casesType} last month</h3>
          <div style={styles.relative}>
            {newCaseWorldwide.length > 0 && (
                <Line
                    data={{
                      datasets: [
                        {
                          backgroundColor: "#CCCCCC",
                          borderColor: "#666666",
                          data: newCaseWorldwide,
                        },
                      ],
                    }}
                    options={WWOptions}
                />
            )}
          </div>
          <h3>Today in the United States</h3>

          <div style={styles.relative}>
            {/*<Doughnut data={test} options={doughnutOptions} />*/}

              <Pie
                  data={pieUSAData}
                  options={pieOptions}
              />


          </div>

        </div>
  );

};
export default SmallCharts;
