import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
	
	<Provider>
		<App /> 
	</Provider>,

	document.getElementById('root'));
registerServiceWorker();
