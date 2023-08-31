import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = () => {
  var cat = ['A', 'B', 'C'];
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: { text: 'Multi-Decode' },
    xAxis: {
      crosshair: true,
      categories: cat,
    },
    yAxis: {
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      min: 0,
      max: 5,
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
    series: [{ data: [1, 2, 3] }, { data: [4, 1, 5] }],
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
