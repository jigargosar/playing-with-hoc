import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../../styled-components/Table'
import SimpleTabs from '../../components/SimpleTabs'

storiesOf('Acceptance|App 1', module).add('with hardcoded table rows', () => (
  <SimpleTabs
    tabHeaderList={['XYZ Corp. Inc.', 'Wonderland Inc.']}
    tabContentList={[
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr. Foo Jr.</td>
            <td>Plumber</td>
            <td>$10,000.00</td>
          </tr>
          <tr>
            <td>Mr. Bar</td>
            <td>CEO</td>
            <td>$1.00</td>
          </tr>
        </tbody>
      </Table>,
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr. Smith</td>
            <td>Con Man</td>
            <td>$10,000,000.00</td>
          </tr>
          <tr>
            <td>Mr. Jones</td>
            <td>Project Lead</td>
            <td>$99,999.00</td>
          </tr>
        </tbody>
      </Table>,
    ]}
  />
))
