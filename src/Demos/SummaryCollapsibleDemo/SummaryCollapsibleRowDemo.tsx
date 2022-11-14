import React, { useState } from 'react';

import { ITableProps, kaReducer, Table } from '../../lib';
import { DataType } from '../../lib/enums';
import { DispatchFunc } from '../../lib/types';

const dataArray = Array(100).fill(undefined).map(
  (_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    column5: index,
    id: index,
  }),
);

const tablePropsInit: ITableProps = {
  columns: [
    { key: 'column1', title: 'Column 1', dataType: DataType.String },
    { key: 'column2', title: 'Column 2', dataType: DataType.String },
    { key: 'column3', title: 'Column 3', dataType: DataType.String },
    { key: 'column4', title: 'Column 4', dataType: DataType.String },
    { key: 'column5', title: 'Index', dataType: DataType.Number },
  ],
  data: dataArray,
  rowKeyField: 'id',
  virtualScrolling: {
    enabled: true
  },
};

const SummaryCollapsibleRowDemo: React.FC = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };

  return (
    <Table
      {...tableProps}
      summaryCollapsibleRow={true}
      dispatch={dispatch}
      childComponents={{
        tableWrapper: {
          elementAttributes: () => ({ style: { maxHeight: 600 }})
        },
        summaryLine: {
          content: (props) => {
            const sum = props.data?.reduce((acc, curr) => acc + (curr as any).column5, 0) as number;
            return (
              <>
                <th colSpan={props.columns.length - 1} style={{ textAlign: 'right', paddingRight: '15px'}}>Index sum: {sum}</th>
              </>
            )
          }
        }
      }}
    />
  );
};

export default SummaryCollapsibleRowDemo;
