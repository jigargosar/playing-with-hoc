import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../components/Table'
import {times} from 'ramda'
import {fakeName, randomJobTitle, randomNumber} from '../lib/fake'

function fakePersonRecord() {
  return {
    name: fakeName(),
    balance: randomNumber(),
    jobTitle: randomJobTitle(),
  }
}

function fakePersonList() {
  return times(fakePersonRecord, 100)
}

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
    return (
      <tr>
        {['name', 'jobTitle', 'balance'].map(rowDataKey =>
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
