import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import { connect } from 'react-redux';
import { useAuth0 } from './react-auth0-spa';
import { attachUser } from './redux/actions/userActions';

const App = ({ attachUser }) => {
	const { user } = useAuth0();
	console.log(user);

	if (user) {
	}

	useEffect(() => {
		if (user) {
			attachUser(user);
		}
	}, [user]);

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
