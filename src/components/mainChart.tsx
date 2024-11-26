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
    // Add other countries
  ];

  return (
    <div className="w-full h-[340px]  rounded-lg p-4 shadow-md">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 1, max: 10, stacked: false , reverse: true}}
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
        colors={{ scheme: "category10" }}
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
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
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

