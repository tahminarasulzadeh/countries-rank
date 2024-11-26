import React from "react";
import { ResponsiveLine } from "@nivo/line";

const MainChart: React.FC = () => {
  const data = [
    {
      id: "USA",
      data: [
        { x: 1980, y: 1 },
        { x: 1990, y: 1 },
        { x: 2000, y: 1 },
        { x: 2010, y: 1 },
      ],
    },
    {
      id: "Japan",
      data: [
        { x: 1980, y: 2 },
        { x: 1990, y: 2 },
        { x: 2000, y: 3 },
        { x: 2010, y: 3 },
      ],
    },
    {
      id: "Germany",
      data: [
        { x: 1980, y: 3 },
        { x: 1990, y: 4 },
        { x: 2000, y: 4 },
        { x: 2010, y: 5 },
      ],
    },
    {
      id: "France",
      data: [
        { x: 1980, y: 4 },
        { x: 1990, y: 5 },
        { x: 2000, y: 5 },
        { x: 2010, y: 6 },
      ],
    },
    // Add more countries up to 20 or more here
    {
      id: "South Korea",
      data: [
        { x: 1980, y: 10 },
        { x: 1990, y: 9 },
        { x: 2000, y: 7 },
        { x: 2010, y: 8 },
      ],
    },
    {
      id: "Brazil",
      data: [
        { x: 1980, y: 9 },
        { x: 1990, y: 8 },
        { x: 2000, y: 9 },
        { x: 2010, y: 9 },
      ],
    },
    {
      id: "Russia",
      data: [
        { x: 1980, y: 8 },
        { x: 1990, y: 7 },
        { x: 2000, y: 8 },
        { x: 2010, y: 10 },
      ],
    },
  ];

  return (
    <div className="w-full h-[400px]  rounded-lg p-4 shadow-md">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 1,
          max: 10,
          stacked: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          legend: "Year",
          legendOffset: 36,
          legendPosition: "middle",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          legend: "Rank",
          legendOffset: -40,
          legendPosition: "middle",
          tickSize: 5,
          tickPadding: 5,
        }}
        colors={{ scheme: "category10" }} // Automatically generates unique colors
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
        enableSlices="x"
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 130,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 100,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: "#ffffff",
              },
              text: {
                fill: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: "#6b7280",
            },
          },
          legends: {
            text: {
              fill: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
};

export default MainChart;
