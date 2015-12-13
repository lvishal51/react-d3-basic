"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid
} from 'react-d3-core';

import {
  Scatter,
  Chart
} from 'react-d3-shape';

import CommonProps from './commonProps';

export default class ScatterPlot extends Component {

  constructor(props) {
    super(props);
    console.log('hellow')
  }

  static defaultProps = CommonProps

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired
  }

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      showXGrid,
      showYGrid
    } = this.props;

    var xgrid, ygrid;

    if(showXGrid) xgrid = <Xgrid/>
    if(showYGrid) ygrid = <Ygrid/>

    return (
      <Chart
        {...this.props}
        width= {width}
        height= {height}
        data= {data}
        chartSeries= {chartSeries}
        >
        <Scatter
          chartSeries= {chartSeries}
        />
        {xgrid}
        {ygrid}
        <Xaxis/>
        <Yaxis/>
      </Chart>
    )
  }
}
