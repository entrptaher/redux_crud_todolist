import React from 'react';
import ReactDom from 'react-dom';

import { shallow, mount, render } from 'enzyme';
import Header from '../containers/Header';

// ======== eslint
/*global describe:true*/
/*global it:true*/
/*global xit:true*/
/*global expect:true*/
/*global render:true*/
/*global mount:true*/
/*global beforeEach:true*/
/*eslint no-undef: "error"*/

jest.mock('../containers/Login')

describe('The Header Component w/ ReactDom', () => {

	xit('..renders the Header component w/ReactDom', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<Header/>,
			div
		);
	});
});

describe('The Header Component', () => {

	let _Header;
	beforeEach(() => {
		_Header = mount(<Header/>);
	});

	xit('..renders the component class "header" ', () => {
		expect(
			_Header
				.find('div.header')
				.length
		).toBe(1);
	});

	xit('..renders the component class "login" ', () => {
		expect(
			_Header
				.find('LoginMock')
				.length
		).toBe(1);
	});

	xit('..has a login link', () => {
		expect();
	});

});



