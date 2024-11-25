import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    { year: 1980, value1: 1000, value2: 1500, value3: 2000 },
    { year: 1985, value1: 2000, value2: 2500, value3: 3000 },
    { year: 1990, value1: 3000, value2: 4000, value3: 5000 },
    { year: 1995, value1: 5000, value2: 6000, value3: 7000 },
    { year: 2000, value1: 7000, value2: 8000, value3: 9000 },
    { year: 2005, value1: 10000, value2: 11000, value3: 12000 },
    { year: 2010, value1: 15000, value2: 16000, value3: 17000 },
    { year: 2015, value1: 18000, value2: 19000, value3: 20000 },
    { year: 2020, value1: 20000, value2: 21000, value3: 22000 },

  ];
  



const MyLineChart = () => {
  return (
    <ResponsiveContainer className="w-[600px] mt-2 h-[400px]">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="year" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value1" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="value2" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="value3" stroke="#ff7300" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
