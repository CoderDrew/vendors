import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Chart from './components/chart/Chart';
import Grid from './components/grid/Grid';
import data from './vendor.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container-fluid p-0'>
          <Navbar title='Vendor Payments' icon='far fa-chart-bar' />
          <div style={{ padding: '1rem' }}></div>
          <div className='row'>
            <div className='col-3'>
              <Chart data={data} />
            </div>
            <div className='col-9'>
              <Grid />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
