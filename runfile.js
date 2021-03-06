import {run} from 'runjs'
import {assert} from './src/lib/assert'

process.env['REACT_EDITOR'] = 'webstorm'

export function yarnAdd() {
  run(
    `yarn add \\
    react-app-rewired \\
    power-assert babel-plugin-empower-assert babel-plugin-espower \\
    @compositor/x0 react-emotion\\
    radium \\
    ramda tachyons nanoid prop-types recompose \\
    husky lint-staged nodemon plop \\
    cross-env \\
    mobx mobx-react \\
    faker chance \\
    radium-loader classname nanoid\\
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
  run(`react-app-rewired start`)
}

export const sb = () => {
  run(`yarn run storybook`)
}

export function xx() {
  run(`x0 docs --open --port 3100`)
}
export function build() {
  run(`x0 build docs`)
}
export function deployO() {
  run(`now dist`)
}
export function alias() {
  run(`now alias`,{cwd:'dist'})
}

export function deploy() {
  build()
  deployO()
  alias()
}
export const d = deploy
