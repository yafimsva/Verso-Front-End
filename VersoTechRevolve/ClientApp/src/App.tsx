import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Footer from "./components/Footer";
import Routes from "./routes/Routes";

import './custom.css';

export default () => (
    <Layout>
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Routes />
    </Layout>
);
