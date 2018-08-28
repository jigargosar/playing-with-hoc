import {run} from 'runjs'
import {assert} from './src/lib/assert'

process.env['REACT_EDITOR'] = 'webstorm'

export function hello(name = 'Mysterious') {
  console.log(`Hello ${name}!`)
}

export function gitInit() {
  run(`echo '.idea/workspace.xml' >> .gitignore`)
  run(`git init && git add .  && git commit -m 'git init'`)
  run(`git add .  && git commit -m 'git init'`)
  run(`git commit -m 'git init'`)
}

export function installCommonPackages() {
  run(
    `yarn add \\
    react-app-rewired \\
    power-assert babel-plugin-empower-assert babel-plugin-espower \\
    @compositor/x0 \\
    radium \\
    ramda tachyons nanoid prop-types recompose \\
    husky lint-staged nodemon plop \\
    runjs cross-env \\
    `,
  )
}

export const i = installCommonPackages

export function createConfigOverridesJS() {
  run(`cp templates/config-overrides.js .`)
}


export function rewired(cmdName, ...options) {
  assert(['start', 'build', 'test'].includes(cmdName))
  const command = `react-app-rewired ${cmdName} `
  run(command)
}

export const dev = () => {
  rewired('start')
}

