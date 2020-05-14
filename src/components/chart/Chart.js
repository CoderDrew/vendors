import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Cheyenne', 'Casper', 'Jackson', 'Laramie', 'Rawlins'],
        datasets: [
          {
            label: 'Population',
            data: [63243, 58756, 10483, 32178, 8975],
            //backgroundColor: 'green',
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
            borderWidth: 1,
            borderColor: 'gray',
            hoverBorderWidth: 3,
            hoverBorderColor: 'black',
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities in Wyoming',
            },
          }}
        />
        <Pie data={this.state.chartData} />
        <Line data={this.state.chartData} />
      </div>
    );
  }
}

export default Chart;
