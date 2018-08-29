import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../components/Table'

export function loadTableStories() {
  storiesOf('Helper Components/Table', module)
    .add('with no content', () => <Table />)
    .add('with sample content', () => (
      <Table>
        <caption>A test table with merged cells</caption>
        <colgroup>
          <col />
          <col />
          <col />
          <col style={{ backgroundColor: 'bisque' }} />
        </colgroup>
        <thead>
          <tr>
            <td rowSpan={2} />
            <th colSpan={2}>Average</th>
            <th rowSpan={2}>Red eyes</th>
          </tr>
          <tr>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Males</th>
            <td>1.9</td>
            <td>0.003</td>
            <td>40%</td>
          </tr>
          <tr>
            <th>Females</th>
            <td>1.7</td>
            <td>0.002</td>
            <td>43%</td>
          </tr>
        </tbody>
      </Table>
    ))
}
