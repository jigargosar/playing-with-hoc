//
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
import React from 'react'
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
import * as rebassScope from 'rebass'
import {Box, Container, Flex, h1, Provider as RebassProvider} from 'rebass'
import createMarkDownScope from '@rebass/markdown'
// noinspection ES6UnusedImports,NpmUsedModulesInstalled,ES6CheckImport
import {Link} from 'react-router-dom'
//
import {ScopeProvider, SidebarLayout} from '@compositor/x0/components'
import theme from './_theme'
import {merge, sortBy} from 'ramda'
import 'tachyons'

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
  const {routes, route} = props
  const {layout} = (route && route.props) || {}

  const Layout = layout === 'landing' ? LandingLayout : SidebarLayout

  const nav = sortRoutes(routes)
  console.log('rebassScope', rebassScope)
  return (
    <div className={'code'}>
      <ScopeProvider scope={merge(rebassScope, createMarkDownScope({
        h1: {
          fontSize: [5, 6, 7],
          color: 'tomato'
        }
      }))}>
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
