import {storiesOf} from "@storybook/react";
import Button from "../components/Button";
import {action} from "@storybook/addon-actions";
import React from "react";

export function loadButtonStories() {
  storiesOf('Helper Components/Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
      <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
      </Button>
    ));
}