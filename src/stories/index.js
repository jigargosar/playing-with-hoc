import React from 'react';
import "tachyons"
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from "../components/Button";
// import {linkTo} from '@storybook/addon-links';


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
