import React, { useEffect } from 'react';
import { Container, Card, CardHeader, CardBody, Spinner } from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchGlossary } from '../../../redux/actions/fetchGlossaryActions';

import { useAuth0 } from '../../../react-auth0-spa';

const UsingAPIGlossary = ({ dispatch, glossary }) => {
	const { getTokenSilently } = useAuth0();

	useEffect(() => {
		getTokenSilently().then(result => {
			dispatch(fetchGlossary(result));
		});
		// eslint-disable-next-line
	}, []);

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

const mapStateToProps = state => ({
	glossary: state.glossary,
	theme: state.theme.currentTheme
});

export default connect(mapStateToProps)(UsingAPIGlossary);
