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
import {sortBy} from "ramda";

const navOrder = [
  'introduction',
  'hoc',
  'no-seriously'
]
const pageNames = {
  index: 'Home',
  'hoc':'HOC',
  'cli-options': 'CLI Options'
}

const sortRoutes = routes => [
  ...sortBy(a => {
    const i = navOrder.indexOf(a.name)
    return i < 0 ? Infinity : i
  }, routes)
].map(route => {
  if (!pageNames[route.name]) return route
  return {
    ...route,
    name: pageNames[route.name]
  }
})

const LandingLayout = SidebarLayout

export default props => {
  const {
    routes,
    route,
  } = props
  const { layout } = (route && route.props) || {}

  const Layout = layout === 'landing'
    ? LandingLayout
    : SidebarLayout

  const nav = sortRoutes(routes)

  return (
    <ScopeProvider scope={scope}>
      <RebassProvider theme={theme}>
        <Layout
          {...props}
          routes={nav}
          title={'HOC'}
          // logo={<X0 size={24} color='magenta' />}
        />
      </RebassProvider>
    </ScopeProvider>)
}