import defaultOptions from '../../defaultOptions';
import { ITableBodyProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import TableBodyContent from '../TableBodyContent/TableBodyContent';
import React from 'react';

const TableBody: React.FunctionComponent<ITableBodyProps> = (props) => {
  const {
    childComponents,
    isTableBodyCollapsed
  } = props;

  const {elementAttributes, content} = getElementCustomization({
    className: defaultOptions.css.tbody,
  }, props, childComponents.tableBody);

  const renderChildren = isTableBodyCollapsed === undefined || isTableBodyCollapsed ? (content || <TableBodyContent {...props} />) : null;

  return (
    <tbody {...elementAttributes}>
    {renderChildren}
    </tbody>
  );
};

export default TableBody;
