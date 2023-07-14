 

import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData, height,width}) => {
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
      <Bar
        data={chartData}
        options={{
            // responsive: true,
            // maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "User gained"
            },
            legend: {
              display: false
            }
          },
        }}
        height={height}
        width={width}
      />
    </div>
  );
};

