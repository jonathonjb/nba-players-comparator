import React from 'react';
import { Table } from 'reactstrap'

type TableProps = {
  objects: Object[]
};

const CustomTable = (props: TableProps) => {
  const renderTableHead = () => {
    return <thead>
      <tr>
        {Object.keys(props.objects[0]).map(column => {
          return <th>
            {column}
          </th>
        })}
      </tr>
    </thead>
  }

  const renderTableRows = () => {
    return <tbody>
      {props.objects.map(object => {
        return renderTableRow(object)
      })}

    </tbody>
  }

  const renderTableRow = (object: Object) => {
    return <tr>
      {Object.values(object).map(value => {
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
