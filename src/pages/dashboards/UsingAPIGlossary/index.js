import React, { useEffect } from 'react';
import { Container, Card, CardHeader, CardBody } from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchGlossary } from '../../../redux/actions/fetchGlossaryActions';

import { useAuth0 } from '../../../react-auth0-spa';

const UsingAPIGlossary = props => {
	const { getTokenSilently } = useAuth0();

	useEffect(() => {
		const { dispatch } = props;
		getTokenSilently().then(result => {
			dispatch(fetchGlossary(result));
		});
		// eslint-disable-next-line
	}, []);

	return (
		<Container fluid className="p-0">
			<Header />
			{props.glossary.items.map((item, index) => {
				return (
					<Card key={index}>
						<CardHeader>{item.term}</CardHeader>
						<CardBody>{item.definition}</CardBody>
					</Card>
				);
			})}
		</Container>
	);
};

const mapStateToProps = state => ({
	glossary: state.glossary,
	theme: state.theme.currentTheme
});

export default connect(mapStateToProps)(UsingAPIGlossary);
