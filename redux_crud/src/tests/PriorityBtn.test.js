import React from 'react';
import ReactDOM from 'react-dom';
import PriorityBtn from '../containers/PriorityBtn';

import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  		<PriorityBtn />,
  	div);
});


