import React from "react";
import HeatMap from 'jsheatmap'

// Days of rain in summer summer months, by year
const headings = ["June", "July", "August", "September"]  // the months
const rows = [
  ["2015", [9, 5, 6, 8]],   // the years and rainy days by month
  ["2016", [7, 5, 10, 7]],
  ["2017", [7, 4, 3, 9]],
  ["2018", [10, 5, 6, 8]],
  ["2019", [8, 9, 3, 1]],
]


const heatmap = new HeatMap(headings, rows)
const data = heatmap.getData();
const background = (rgb) => {
  return `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;
}

export default function() {
  return (
      <div>
        <HeatMap />
      </div>
  );
}