import React from 'react';
import './App.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarChart } from './components/charted';
import Profile from './components/profile';
import { Data } from './data/data';
import Home from './components/FetchData';


Chart.register(CategoryScale);



export default function App() {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  React.useEffect(() => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      labels: Data.map((data) => data.year),
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: Data.map((data) => data.userGain)
        }
      ]
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);

  return (
    <div className="App">
      <p className=' text-4xl p-5 font-semibold'>Dashboard</p>
      <div className=" flex justify-center items-center m-5 bg-green-100  rounded-xl border-2 border-stone-500">
        Hello
      </div>
      <div>
        <Profile />
      </div>
      <div className=" flex justify-center items-center m-5 bg-green-100  rounded-xl border-2 border-stone-500">
        <div className=' w-1/2 m-5'>Some Random Text And Information about the graph can be displayed</div>
        <div className=' w-1/2 p-2'>

          <BarChart chartData={chartData} />
        </div>
      </div>
      <div>
        <h1>Some Data here</h1>
        <Home />
      </div>
    </div>
  );
}

