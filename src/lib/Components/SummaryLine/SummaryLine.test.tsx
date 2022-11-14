import React from 'react';
import ReactDOM from 'react-dom';
import { SummaryLine } from './SummaryLine';

const tableProps: any = {
  childComponents: {},
  column: { key: 'column', name: 'Column 1'},
  columns: [
    { key: 'column', name: 'Column 1' },
    { key: 'column2', name: 'Column 2' },
  ],
  data: [
    { column: 1, column2: 2, id: 1 },
    { column: 12, column2: 22, id: 2 },
  ],
  rowKeyField: 'id',
};

it('renders without crashing without collapsible row', () => {
  const div = document.createElement('tr');
  ReactDOM.render(<SummaryLine {...tableProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with collapsible row', () => {
  const div = document.createElement('tr');
  ReactDOM.render(<SummaryLine {...{...tableProps, summaryCollapsibleRow: true}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
