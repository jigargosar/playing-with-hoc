import {storiesOf} from '@storybook/react'
import Button from '../../styled-components/Button'
import {action} from '@storybook/addon-actions'
import React from 'react'

storiesOf('Styled Components|Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
