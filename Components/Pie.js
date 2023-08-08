"use client"

import { Chart, ArcElement ,Tooltip} from "chart.js";
Chart.register(ArcElement, Tooltip);
import { Pie } from "react-chartjs-2";


const PieChart = ({ cases, deaths, recovered}) => {

  return (
    <Pie
      className=" container mx-auto w-[35%]  sm:w-[50%] mt-4"
      data={{
        labels: ["Cases", "Deaths", "Recovered"],
        datasets: [
          {
            data: [cases, deaths, recovered],
            backgroundColor: ["#3366CC", "red", "#FF9900"],
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          tooltip: true,
        },
      }}
    />
  );
};

export default PieChart;
