import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

import { Badge, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

const LineChart = ({ theme, sales }) => {
  const { items, loading } = sales;

  var labels = [];
  var money = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //need to give initial value for animation
  var orders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //to happen on initial page load

  if (!loading) {
    money = []; // clear initial data, and set with real data
    orders = [];
    items.forEach(item => {
      labels.push(item.month);
      money.push(item.amountOfMoney);
      orders.push(item.amountOfSales);
    });
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Sales ($)',
        fill: true,
        backgroundColor: 'transparent',
        borderColor: theme.primary,
        data: money
      },
      {
        label: 'Orders',
        fill: true,
        backgroundColor: 'transparent',
        borderColor: theme.tertiary,
        borderDash: [4, 4],
        data: orders
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: 'rgba(0,0,0,0.05)'
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: 'rgba(0,0,0,0)',
            fontColor: '#fff'
          }
        }
      ]
    }
  };

  return (
    <Card className="flex-fill w-100">
      <CardHeader>
        <Badge color="primary" className="float-right">
          Monthly
        </Badge>
        <CardTitle tag="h5" className="mb-0">
          Total Revenue
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart chart-lg">
          <Line data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.currentTheme,
  sales: state.sales
});

export default connect(mapStateToProps)(LineChart);
