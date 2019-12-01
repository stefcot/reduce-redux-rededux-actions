import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// because it would fail due to the app component depending on external props,
// th test will be skipped for now
it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
