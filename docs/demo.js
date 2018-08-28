import React, {Fragment} from 'react'
import {LivePreview} from '@compositor/x0/components'

const code = `
<button>Hello</button>
`

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Demo</h1>
        <p>WAT!!!</p>
        export default props =>
        <LivePreview
          code={code}
        />
      </Fragment>
    )
  }
}
