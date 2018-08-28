import React, {Component, Fragment} from 'react'
import {GlobalStyles} from './GlobalStyles'
import * as xr from 'mobx-react'

function Page() {
  return <Fragment>{'EmptyPage'}</Fragment>
}

class App extends Component {
  state = {
    hasError: false,
  }
  render() {
    return (
      <Fragment>
        {this.state.hasError ? (
          'Error'
        ) : (
          <Fragment>
            <GlobalStyles />
            <Page />
          </Fragment>
        )}
      </Fragment>
    )
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    this.setState({ hasError: true })
  }
}

export default xr.observer(App)
