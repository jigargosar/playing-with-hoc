import {storiesOf} from '@storybook/react'
import React, {Fragment} from 'react'
import Table from '../components/Table'

function renderRows() {
  return (
    <Fragment>
      <tr>
        <td>3</td>
        <td>0.7</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0.4</td>
      </tr>
    </Fragment>
  )
}

export function loadTableHOCStories() {
  storiesOf('HOC/Table', module).add('with basic content', () => (
    <Table>
      <caption>A Basic table</caption>
      <thead>
        <tr>
          <th>Chars</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  ))
}
