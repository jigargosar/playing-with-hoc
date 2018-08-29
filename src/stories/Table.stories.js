import {storiesOf} from '@storybook/react'
import React from 'react'
import Table from '../components/Table'

export function loadTableStories() {
  storiesOf('Helper Components/Table', module).add('with no rows', () => (
    <Table />
  ))
}
