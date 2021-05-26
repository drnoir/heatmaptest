import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ["Remote (<1% chance of occurence)", "Highly Unlikely (1% to 10% chance of occurence)", "Unlikely (10% to 25% chance of occurence)", "Possible  (25% to 70% chance of occurence)", "Likely (70% to 90% chance of occurence)", "Almost Certain (>99% chance of occurence)"];

// Display only even labels
const xLabelsVisibility = new Array(40)
.fill(0)
.map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["Catastrophic", "Critical", "Major", "Moderate", "Minor", "Insignificant"];
const data = new Array(yLabels.length)
.fill(0)
.map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 360))
);

const background = (rgb) => {
  return `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;
}

export default function() {
  return (
      <div style={{ fontSize: "13px" }}>
        <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            yLabelWidth={100}
            xLabelsLocation={"top"}
            // xLabelsVisibility={xLabelsVisibility}
            xLabelWidth={80}
            data={data}
            squares
            height={110}
            onClick={(x, y) => alert(`Clicked ${x}, ${y}, ${data}`)}
            cellStyle={(background, value, min, max, data, x, y) => ({
              background: `rgb(34,139,34, ${1 - (max - value) / (max - min)})`,
              fontSize: "11.5px",
              color: "#444"
            })
            }
            cellRender={value => value && <div>{value}</div>}
        />
      </div>
  );
}