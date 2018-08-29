import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../components/Table'
import {times} from 'ramda'
import {fakeName, randomCard, randomNumber} from "../lib/fake";

function createPersonRow() {
  return { name: fakeName(), balance: randomNumber(), card:randomCard() }
}

function allRows() {
  return times(createPersonRow, 100)
}

function renderRows() {
  return allRows().map(row => {
    return (
      <tr>
        <td>{`${row.name}`}</td>
        <td>{`${row.card}`}</td>
        <td>{`${row.balance}`}</td>
      </tr>
    )
  })
}

export function loadTableHOCStories() {
  storiesOf('HOC/Table', module).add('with basic content', () => (
    <Table>
      <caption>A Basic table</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Card</th>
          <th>$ Balance</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  ))
}
