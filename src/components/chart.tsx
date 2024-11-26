import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartDataset,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

// Function to generate random data for countries
const generateRandomData = (): number[] => {
  const data = [];
  for (let i = 0; i < 9; i++) {
    // Random values between 5000 and 20000
    data.push(Math.floor(Math.random() * (20000 - 5000) + 5000));
  }
  return data;
};



// Sample Data with 250 countries
const data: ChartData<'line', number[], string> = {
  labels: ['1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
  datasets: Array.from({ length: 250 }, (_, index) => ({
    label: `Country ${index + 1}`,
    data: generateRandomData(),
    borderColor: `hsl(${(index * 360) / 250}, 100%, 50%)`, // Unique color for each country
    borderWidth: 0.75, // Increase line thickness for better visibility
    fill: false,
    cubicInterpolationMode: 'monotone', // Smooth lines
    pointRadius: 2, // Smaller data points to reduce clutter
    pointBackgroundColor: `hsl(${(index * 360) / 250}, 100%, 60%)`, // Different point color
    pointHoverRadius: 5, // Larger points on hover for better interaction
    lineTension: 0.2, // Controls line smoothing
    borderDash: [5, 5], // Dash pattern for clearer distinction
  })) as ChartDataset<'line', number[]>[], // Ensure type compatibility
};

// Chart options with Y-axis set from 5k to 20k
const options: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    x: {
      ticks: { color: '#fff' },
    },
    y: {
      min: 5000, // Minimum Y value
      max: 20000, // Maximum Y value
      ticks: {
        color: '#fff',
        callback: function (tickValue: string | number) {
          if (typeof tickValue === 'number') {
            return `${tickValue / 1000}k`; // Format as '5k' for 5000
          }
          return tickValue;
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw / 1000}k`;
        },
      },
    },
  },
};

const LineChartComponent: React.FC = () => (
  <div className="w-[480px] h-46 p-4 rounded-lg shadow-lg">
    <Line data={data} options={options} />
  </div>
);

export default LineChartComponent;
