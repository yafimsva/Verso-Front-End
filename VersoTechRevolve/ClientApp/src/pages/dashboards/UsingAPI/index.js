import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';
import LineChart from './LineChart';
import { fetchSales } from '../../../redux/actions/salesDataActions';

import Statistics from './Statistics';

const UsingAPI = props => {
	useEffect(() => {
		props.fetchSales();
	}, []);

	return (
		<Container fluid className="p-0">
			<Header />
			<Statistics />
			<LineChart />
		</Container>
	);
};

const mapDispatchToProps = {
	fetchSales
};

export default connect(null, mapDispatchToProps)(UsingAPI);
