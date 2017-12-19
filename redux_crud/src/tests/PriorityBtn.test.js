import React from 'react';
import ReactDOM from 'react-dom';
import PriorityBtn from '../containers/PriorityBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  		<PriorityBtn />,
  	div);
});


