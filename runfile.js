import {run} from 'runjs'
import {assert} from './src/lib/assert'

process.env['REACT_EDITOR'] = 'webstorm'

export function yarnAdd() {
  run(
    `yarn add \\
    react-app-rewired \\
    power-assert babel-plugin-empower-assert babel-plugin-espower \\
    @compositor/x0 \\
    radium \\
    ramda tachyons nanoid prop-types recompose \\
    husky lint-staged nodemon plop \\
    cross-env \\
    mobx mobx-react \\
    `,
  )
}
export const ya = yarnAdd

export function createConfigOverridesJS() {
  run(`cp -f templates/config-overrides.js .`)
  run(`git add .`)
  // run(`git commit -m 'added config'`)
}
export const rari = createConfigOverridesJS

export function gitInit() {
  run(`cp -f templates/.gitignore .gitignore`)
  run(`git init`)
  run(`git add .`)
  run(`git commit -m 'git init'`)
}
export const gi = gitInit

export function rewired(cmdName, ...options) {
  assert(['start', 'build', 'test'].includes(cmdName))
  const command = `react-app-rewired ${cmdName} `
  run(command)
}

export const dev = () => {
  rewired('start')
}
