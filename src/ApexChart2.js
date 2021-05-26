import React , { Component }  from "react";
import Chart  from "react-apexcharts";

class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      Risklikelihood:[1, 4, 2, 6, 5, 2],
      RiskImpact:[1, 4, 2, 6, 5, 6],

      series: [
        {
          name: 'Risk1',
          data:[122,320],
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
          data: [0,0,0,0,0,0]
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
    //calc testing stuff for unweighted score calc
    var i=0;
    const unweightedScore=[];
    for (i=0; i <this.state.Risklikelihood.length; i++) {
        let initcal = this.state.Risklikelihood[i] * this.state.RiskImpact[i];
        console.log(initcal)
        let freshVal =unweightedScore.push(initcal)
    }


    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const controlweighting = getRandomInt(11);

    //calc testing stuff for inherent risk scores - Weightred risk score
    const inherentriskScores=[];
    for (i=0; i <this.state.Risklikelihood.length; i++) {
      let initcalIR = unweightedScore[i] *  controlweighting;
      console.log(initcalIR)
      let freshValIR = inherentriskScores.push(initcalIR )
    }
    // weighted maturitiy score RESIDUAL RISKS
    const weightedMatScore = [];
    const randMaturity = getRandomInt(51);
    for (i=0; i <this.state.Risklikelihood.length; i++) {
      let initcalWM = unweightedScore[i] * controlweighting * randMaturity * randMaturity
      console.log(initcalWM)
      let freshValIR = weightedMatScore.push(initcalWM )
    }

    console.log(""
        + "unweighted score"+ unweightedScore,
        "Inherent Risk score"+inherentriskScores,
        "Weighted Maturity score", weightedMatScore );

    return (


        <div>
          <Chart options={this.state.options} series={this.state.series} type="heatmap" height={500} />
        </div>
    );
  }
}
export default ApexChart2;
