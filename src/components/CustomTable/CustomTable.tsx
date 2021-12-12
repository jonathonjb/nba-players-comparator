import React from 'react';
import { Table } from 'reactstrap'
import styled from 'styled-components';

type TableProps = {
  objects: Object[],
  handleClick: (index: number) => void
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
      {props.objects.map((object, index) => {
        return renderTableRow(object, index)
      })}

    </tbody>
  }

  const renderTableRow = (object: Object, index: number) => {
    return <HoverableRow onClick={() => props.handleClick(index)}>
      {Object.values(object).map(value => {
        return <td>
          {value}
        </td>
      })}
    </HoverableRow>
  }

  return <React.Fragment>
    <Table>
      {renderTableHead()}
      {renderTableRows()}
    </Table>
  </React.Fragment>;
};

export default CustomTable;

const HoverableRow = styled.tr`
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`