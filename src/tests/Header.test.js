import React from 'react';
// import ReactDom from 'react-dom';

import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15'
// import { expect } from 'expect';
import Header from '../containers/Header';

describe('The Header Component', () => {

	xit('..renders the Header component', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<Header/>,
			div
		)
	})

	it('..renders the component class "header" ', () => {
		expect(
			shallow(<Header/>)
				.find('div.header')
				.length
			).toBe(2)
	});

});



