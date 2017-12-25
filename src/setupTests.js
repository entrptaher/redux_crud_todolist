import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// ======== esllint
/*global *.* describe:true*/
/*global *.* it:true*/
/*eslint no-undef: "error"*/

configure({ adapter: new Adapter() });