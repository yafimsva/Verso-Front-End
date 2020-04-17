import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useAuth0 } from './react-auth0-spa';
import Routes from './routes/Routes';

import { attachUser } from './redux/actions/userActions';

const App = ({ attachUser }) => {
	const { user } = useAuth0();
	const { getTokenSilently } = useAuth0();

	useEffect(() => {
		console.log('cheking');
		if (user) {
			attachUser(user);
			getTokenSilently().then((result) => {
				window.localStorage.setItem('token', result);
			});
		}
	}, [user, attachUser, getTokenSilently]);

	return (
		<React.Fragment>
			<Routes />
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	attachUser: (user) => dispatch(attachUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
