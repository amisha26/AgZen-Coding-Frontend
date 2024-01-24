/* eslint-disable react/prop-types */
import { ResponsiveBump } from "@nivo/bump";

const MyResponsiveBump = ({ data }) => (
  <ResponsiveBump
    data={data}
    colors={{ scheme: "spectral" }}
    lineWidth={3}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    pointSize={10}
    activePointSize={16}
    inactivePointSize={0}
    pointColor={{ theme: "background" }}
    pointBorderWidth={3}
    activePointBorderWidth={3}
    pointBorderColor={{ from: "serie.color" }}
    axisTop={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Time (sec)",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Units",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    axisRight={null}
  />
);

export default MyResponsiveBump;
