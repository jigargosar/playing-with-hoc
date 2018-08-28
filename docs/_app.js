//
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
import React from 'react'
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
import * as scope from 'rebass'
import {Box, Container, Flex, Provider as RebassProvider} from 'rebass'
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
import {Link} from 'react-router-dom'
//
import {ScopeProvider, SidebarLayout} from '@compositor/x0/components'
import theme from './_theme'
import {sortBy} from 'ramda'
// import "tachyons"

const navOrder = ['index', 'introduction', 'hoc', 'no-seriously']
const pageNames = {
  index: 'Home',
  hoc: 'WAT',
  'no-seriously': 'But Seriously WAT!',
}

const sortRoutes = routes =>
  [
    ...sortBy(a => {
      const i = navOrder.indexOf(a.name)
      return i < 0 ? Infinity : i
    }, routes),
  ].map(route => {
    if (!pageNames[route.name]) return route
    return {
      ...route,
      name: pageNames[route.name],
    }
  })

const LandingLayout = SidebarLayout

export default props => {
  const { routes, route } = props
  const { layout } = (route && route.props) || {}

  const Layout = layout === 'landing' ? LandingLayout : SidebarLayout

  const nav = sortRoutes(routes)

  return (
    <div
      className={'system-sans'}
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`,
      }}
    >
      <ScopeProvider scope={scope}>
        <RebassProvider theme={theme}>
          <Layout
            {...props}
            routes={nav}
            title={'HOC'}
            // logo={<X0 size={24} color='magenta' />}
          />
        </RebassProvider>
      </ScopeProvider>
    </div>
  )
}
