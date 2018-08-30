import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../../styled-components/Table'
import {fakePersonList} from '../fake-helpers'

storiesOf('Acceptance|App 2', module).add('with dynamic rows', () => (
  <Table>
    <thead>{renderHeader()}</thead>
    <tbody>{renderRows(fakePersonList())}</tbody>
  </Table>
))

function renderRows(rows) {
  function renderCell(data) {
    return <td>{`${data}`}</td>
  }
  return rows.map(row => {
    let rowDataKeys = ['name', 'jobTitle', 'balance']
    return <tr>{rowDataKeys.map(rowDataKey => renderCell(row[rowDataKey]))}</tr>
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
