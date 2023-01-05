import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );

  // const Chart = (props) => {
  //   const dataPointValues = props.dataPointValues.map(
  //     (dataPoint) => dataPoint.value
  //   );
  //   const totalMaximum = Math.max(...dataPointValues);

  //   return (
  //     <div className="chart">
  //       {props.dataPoint.map((dataPoint) => (
  //         <ChartBar
  //           key={dataPoint.label}
  //           value={dataPoint.value}
  //           maxValue={totalMaximum}
  //           label={dataPoint.label}
  //         />
  //       ))}
  //     </div>
  //   );
};

export default Chart;
