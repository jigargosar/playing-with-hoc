import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../components/Table'
import {fakePersonList} from "./fake-helpers";

export function loadTableHOCStories() {
  storiesOf('HOC/Table', module).add('with basic content', () => (
    <Table>
      <thead>{renderHeader()}</thead>
      <tbody>{renderRows(fakePersonList())}</tbody>
    </Table>
  ))
}

function renderRows(rows) {
  function renderCell(data) {
    return <td>{`${data}`}</td>
  }
  return rows.map(row => {
    let rowDataKeys = ['name', 'jobTitle', 'balance'];
    return (
      <tr>
        {rowDataKeys.map(rowDataKey =>
          renderCell(row[rowDataKey]),
        )}
      </tr>
    )
  })
}

function renderHeader() {
  return (
    <tr>
      <th>Name</th>
      <th>Job Title</th>
      <th>Account ($) Balance</th>
    </tr>
  )
}
