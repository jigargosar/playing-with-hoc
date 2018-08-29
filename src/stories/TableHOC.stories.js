import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../components/Table'
import {times} from 'ramda'
import {fakeName, randomJobTitle, randomNumber} from '../lib/fake'

function createPersonRow() {
  return {
    name: fakeName(),
    balance: randomNumber(),
    jobTitle: randomJobTitle(),
  }
}

function allRows() {
  return times(createPersonRow, 100)
}

function renderRows(rows) {
  return rows.map(row => {
    return (
      <tr>
        <td>{`${row.name}`}</td>
        <td>{`${row.jobTitle}`}</td>
        <td>{`${row.balance}`}</td>
      </tr>
    )
  })
}

function renderHeader() {
  return (
    <tr>
      <th>Name</th>
      <th>Card</th>
      <th>Account ($) Balance</th>
    </tr>
  )
}

export function loadTableHOCStories() {
  storiesOf('HOC/Table', module).add('with basic content', () => (
    <Table>
      <thead>{renderHeader()}</thead>
      <tbody>{renderRows(allRows())}</tbody>
    </Table>
  ))
}
