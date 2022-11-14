import React, { FC } from 'react';
import { ISummaryLine } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import defaultOptions from '../../defaultOptions';
import { collapseTableBody } from '../../actionCreators';

export const SummaryLine: FC<ISummaryLine> = (props) => {
  const {childComponents, columns, groupedColumns, top, dispatch, isTableBodyCollapsed} = props;
  const {
    elementAttributes,
    content
  } = getElementCustomization({className: defaultOptions.css.summaryLineRow}, props, childComponents.summaryLine)

  if (groupedColumns?.length || top === undefined) {
    return null;
  }

  return (
    <>
      <tr {...elementAttributes} style={{top: `${top}px`}} onClick={() => {dispatch(collapseTableBody())}} role='none'>
        <th className={defaultOptions.css.summaryLineCell}>
          <div
            className={isTableBodyCollapsed === undefined || isTableBodyCollapsed
              ? defaultOptions.css.iconGroupArrowExpanded : defaultOptions.css.iconGroupArrowCollapsed}
          />
        </th>
        {content ??
          (
            <th colSpan={columns.length - 1} className={defaultOptions.css.summaryLineCell}>
              All
            </th>
          )
        }
      </tr>
    </>
  )
}
