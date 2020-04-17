import React, { useEffect } from 'react';
import { Container, Card, CardHeader, CardBody, Spinner } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchAPI } from '../../../redux/actions/fetchAPIActions';

import Header from './Header';

const UsingAPIGlossary = ({ glossary, fetchAPI }) => {
	useEffect(() => {
		fetchAPI('/glossary');
	}, [fetchAPI]);

	const CardsWithData = () => {
		return glossary.items.map((item, index) => {
			return (
				<Card key={index}>
					<CardHeader>{item.term}</CardHeader>
					<CardBody>{item.definition}</CardBody>
				</Card>
			);
		});
	};

	return (
		<Container fluid className="p-0">
			<Header />
			{glossary.loading ? <Spinner color="primary" /> : <CardsWithData />}
		</Container>
	);
};

const mapStateToProps = (state) => ({
	glossary: state.glossary,
	theme: state.theme.currentTheme,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAPI: (endpoint) => dispatch(fetchAPI(endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsingAPIGlossary);
