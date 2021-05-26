import React , { Component }  from "react";
import Chart  from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Insignificant',
          data:[124,345,244,124,360,223]
        },
        {
          name: 'Minor',
          data: [122,313,122,232,123,132]
        },
        {
          name: 'Moderate',
          data:[15,35,87,95,232,123]
        },
        {
          name: 'Major',
          data:[122,151,252,300,232,322]
        },
        {
          name: 'Critical',
          data:[122,350,55,232,232,222]
        },
        {
          name: 'Catastropic',
          data: [123,345,55,333,222,222]
        }
      ],
      options: {
        chart: {
          height: 500,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 1,
                  name: 'Remote',
                  color: '#b4c6e7'
                },
                {
                  from: 2,
                  to: 36,
                  name: 'Highly unlikely',
                  color: '#c6e0b4'
                },
                  {
                from: 108,
                to: 198,
                name: 'unlikely',
                color: '#c65911'
              },
                {
                  from: 108,
                  to: 198,
                  name: 'possible',
                  color: '#ffc000'
                },
                {
                  from: 198,
                  to: 288,
                  name: 'likely',
                  color: '#c00000'
                },
                {
                  from: 288,
                  to: 360,
                  name: 'almost certain',
                  color: '#161616'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'HeatMap Chart with Color Range'
        },
      },


    };
  }



  render() {
    return (


        <div>
          <Chart options={this.state.options} series={this.state.series} type="heatmap" height={500} />
        </div>
    );
  }
}
export default ApexChart;
