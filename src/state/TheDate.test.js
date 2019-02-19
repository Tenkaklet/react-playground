import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';

describe('The Date Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TheDate />, div);

    it.skip('Renders the UI as expected', () => {
        expect(renderer.create(<TheDate />).toJSON()).toMatchSnapshot();
    });
});