import React from 'react'
// noinspection ES6UnusedImports
import * as scope from 'rebass'
import {SidebarLayout} from '@compositor/x0/components'
// noinspection ES6UnusedImports
import theme from './_theme'
import {sortBy} from "ramda";

const navOrder = [
  'introduction',
  'hoc-wat'
]
const pageNames = {
  index: 'Home',
  'hoc-wat':'HOC WAT!!!',
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

export default props =>
  <SidebarLayout {...props} title={`Higher Order C... !!!WAT!!!`}/>