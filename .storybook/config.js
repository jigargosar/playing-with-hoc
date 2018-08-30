import {addDecorator, configure} from '@storybook/react'
import {setConsoleOptions, withConsole} from '@storybook/addon-console'

setConsoleOptions({
  panelExclude: [/\[HMR]/],
})
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
