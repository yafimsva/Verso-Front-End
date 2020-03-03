import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';
import LineChart from './LineChart';
import { fetchSales } from '../../../redux/actions/salesDataActions';

import Statistics from './Statistics';
import { useAuth0 } from '../../../react-auth0-spa';

const UsingAPI = props => {
	const { getTokenSilently } = useAuth0();

	useEffect(() => {
		const { dispatch } = props;
		getTokenSilently().then(result => {
			dispatch(fetchSales(result));
		});
	});

	return (
		<Container fluid className="p-0">
			<Header />
			<Statistics />
			<LineChart />
		</Container>
	);
};

export default connect()(UsingAPI);
