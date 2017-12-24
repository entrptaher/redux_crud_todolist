import React from 'react';
import ReactDom from 'react-dom';

import { shallow } from 'enzyme';
import { expect } from 'expect';
import Header from '../containers/Header';

describe('The Header Component', () => {

	it('..renders the component', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<Header/>,
			div
		)
	})
});



