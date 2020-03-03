import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { dashboard as dashboardRoutes, page as pageRoutes } from './index';
import { useAuth0 } from '../react-auth0-spa';

import DashboardLayout from '../layouts/Dashboard';
import Landing from '../pages/landing/Landing';

import AuthLayout from '../layouts/Auth';
import Page404 from '../pages/auth/Page404';
import history from '../utils/history';

import ScrollToTop from '../components/ScrollToTop';
import Loader from '../components/Loader';

const childRoutes = (Layout, routes) =>
	routes.map(({ children, path, component: Component }, index) =>
		children ? (
			// Route item with children
			children.map(({ path, component: Component }, index) => (
				<PrivateRoute
					key={index}
					path={path}
					exact
					component={props => (
						<Layout>
							<Component {...props} />
						</Layout>
					)}
				/>
			))
		) : (
			// Route item without children
			<PrivateRoute
				key={index}
				path={path}
				exact
				component={props => (
					<Layout>
						<Component {...props} />
					</Layout>
				)}
			/>
		)
	);

const Routes = () => {
	const { loading } = useAuth0();

	if (loading) {
		return <Loader />;
	}

	return (
		<Router history={history}>
			<ScrollToTop>
				<Switch>
					<Route path="/" exact component={Landing} />
					{childRoutes(DashboardLayout, dashboardRoutes)}
					{childRoutes(AuthLayout, pageRoutes)}
					<Route
						render={() => (
							<AuthLayout>
								<Page404 />
							</AuthLayout>
						)}
					/>
				</Switch>
			</ScrollToTop>
		</Router>
	);
};

export default Routes;
