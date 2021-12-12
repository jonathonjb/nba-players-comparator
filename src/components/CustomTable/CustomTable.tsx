import React from 'react';
import { Table } from 'reactstrap'

type TableProps = {
  columns: string[],
  values: string[][]
};

const CustomTable = (props: TableProps) => {
  const renderTableHead = () => {
    return <thead>
      <tr>
        {props.columns.map(column => {
          return <th>
            {column}
          </th>
        })}
      </tr>
    </thead>
  }

  const renderTableRows = () => {
    return <tbody>
      {props.values.map(rowValue => {
        return renderTableRow(rowValue)
      })}
    </tbody>
  }

  const renderTableRow = (rowValues: string[]) => {
    return <tr>
      {rowValues.map(value => {
        return <td>
          {value}
        </td>
      })}
    </tr>
  }

  return <React.Fragment>
    <Table>
      {renderTableHead()}
      {renderTableRows()}
    </Table>
  </React.Fragment>;
};

export default CustomTable;
