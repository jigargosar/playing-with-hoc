import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../styled-components/Table'
import {fakePersonList} from './fake-helpers'

export function loadTableStories() {
  storiesOf('Helper Components/Table', module)
    .add('with basic content', () => (
      <Table>
        <caption>A Basic table</caption>
        <thead>
          <tr>
            <th />
            <th>Chars</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Foo</th>
            <td>3</td>
            <td>0.7</td>
          </tr>
          <tr>
            <th>Bar</th>
            <td>3</td>
            <td>0.4</td>
          </tr>
        </tbody>
      </Table>
    ))
    .add('with merged cells', () => (
      <Table>
        <caption>table with merged cells</caption>
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
    .add('with fake rows content', () => {
      let rowDataKeys = ['name', 'jobTitle', 'balance'];
      return (
        <Table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Account ($) Balance</th>
          </tr>
          </thead>
          <tbody>
          {fakePersonList().map(row => (
            <tr>
              {rowDataKeys.map(rowDataKey => (
                <td>{`${row[rowDataKey]}`}</td>
              ))}
            </tr>
          ))}
          </tbody>
        </Table>
      );
    })
}
