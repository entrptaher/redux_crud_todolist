import React from 'react';
import ReactDOM from 'react-dom';
import DeleteBtn from '../components/DeleteBtn';

import { Provider } from 'react-redux';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
		<Provider store={ store } >
  		<DeleteBtn />
		</Provider>,
  	div);
});

xdescribe('The todo Reducer Props', () => {

})

