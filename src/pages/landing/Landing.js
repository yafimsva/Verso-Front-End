import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { enableClassicTheme } from '../../redux/actions/themeActions';

import { useAuth0 } from '../../react-auth0-spa';

import { Button, Col, Container, Row } from 'reactstrap';

const Landing = () => {
	useState(enableClassicTheme());
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return <Redirect to="/dashboard/using-api" />;
	}

	return (
		<section className="py-5">
			<Container className="text-center">
				<Row>
					<Col md="9" lg="8" xl="6" className="mx-auto">
						<h2 className="h1 mb-3">VersoTech Revolve</h2>
						<Button
							color="primary"
							size="lg"
							onClick={() => loginWithRedirect({})}>
							Login
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default connect()(Landing);
