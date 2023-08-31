import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = () => {
  var linenumber = [];
  for (var i = 1; i <= 20; i++) {
    linenumber.push(i);
  }
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: { text: 'Multi-Decode' },
    xAxis: {
      crosshair: true,
      categories: linenumber,
    },
    yAxis: {
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      min: 0,
      max: 1,
      title: {
        text: '',
      },
      tickInterval: 5,
      labels: { enabled: false },
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      enabled: true,
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      formatter: undefined,
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: undefined,
          },
        },
        label: { enabled: true },
      },
    },
    navigation: {
      menuItemStyle: {
        fontSize: '10px',
      },
    },
    series: [
      {
        data: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
        name: '1st decoder',
        label: { enabled: false },
      },
      {
        data: [1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        name: '2nd decoder',
        label: { enabled: false },
      },
    ],
    chart: {
      type: 'area',
    },
  });

  const updateSeries = () => {
    setChartOptions({
      series: [{ data: [Math.random() * 5, 2, 1] }],
    });
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={updateSeries}>Update Series</button>
    </div>
  );
};

render(<LineChart />, document.getElementById('root'));
