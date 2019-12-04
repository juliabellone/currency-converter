import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('conversor app', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
})
