import {storiesOf} from '@storybook/react'
import React, {Fragment} from 'react'
import Table from '../components/Table'
import {times} from 'ramda'

function createPersonRow() {
  return { name: 'Foo', balance: 1000 }
}

function allRows() {
  return times(createPersonRow, 100)
}

function renderRows() {
  return (
    <Fragment>
      <tr>
        <td>3</td>
        <td>0.7</td>
      </tr>
      {allRows().map(row => {
        return (
          <Fragment>
            <td>{`${row.name}`}</td>
            <td>{`${row.balance}`}</td>
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export function loadTableHOCStories() {
  storiesOf('HOC/Table', module).add('with basic content', () => (
    <Table>
      <caption>A Basic table</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>$ Balance</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  ))
}
