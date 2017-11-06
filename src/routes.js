import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import D1 from './day/D1';

const history = createBrowserHistory();

const Routes = props => (
	<BrowserRouter>
		<div>
			<Route exact path="/D1" component={D1} />
			<Route exact path="/" component={Home} />
		</div>
	</BrowserRouter>
);

export default Routes;