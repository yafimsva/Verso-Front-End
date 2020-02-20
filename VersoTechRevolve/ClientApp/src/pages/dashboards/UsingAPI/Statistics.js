import React from 'react';
import { Col, Card, CardBody, Media, Row } from 'reactstrap';
import { ShoppingCart, DollarSign } from 'react-feather';
import { connect } from 'react-redux';

const Statistics = ({ sales }) => {
  const { items, loading } = sales;

  var salesThisYear = null;
  var totalEarnings = null;

  if (!loading) {
    items.forEach(item => {
      salesThisYear += item.amountOfSales;
      totalEarnings += item.amountOfMoney;
    });
  }

  if (totalEarnings != null) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    totalEarnings = formatter.format(totalEarnings);
  }

  return (
    <Row className="justify-content-center">
      <Col md="6" lg="5">
        <Card className="flex-fill">
          <CardBody className="py-4">
            <Media>
              <div className="d-inline-block mt-2 mr-3">
                <ShoppingCart className="feather-lg text-primary" />
              </div>
              <Media body>
                <h3 className="mb-2">{salesThisYear}</h3>
                <div className="mb-0">Sales This Year</div>
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
      <Col md="6" lg="5">
        <Card className="flex-fill">
          <CardBody className="py-4">
            <Media>
              <div className="d-inline-block mt-2 mr-3">
                <DollarSign className="feather-lg text-success" />
              </div>
              <Media body>
                <h3 className="mb-2">{totalEarnings}</h3>
                <div className="mb-0">Total Earnings</div>
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  sales: state.sales
});

export default connect(mapStateToProps)(Statistics);
