import React from 'react';
import ReactDOM from 'react-dom';

import SummaryCollapsibleRowDemo from './SummaryCollapsibleRowDemo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryCollapsibleRowDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
