import React, {Component} from 'react'
import {Block, Tabs} from 'reakit'
import {omit} from 'ramda'

// import PropTypes from 'prop-types';

class SimpleTabs extends Component {
  render() {
    return (
      <Tabs.Container loop={false}>
        {childProps => {
          const tabs = omit(['loop'])(childProps)
          return (
            <Block>
              <Tabs>
                <Tabs.Tab tab="first" {...tabs}>
                  First
                </Tabs.Tab>
                <Tabs.Tab tab="second" {...tabs}>
                  Second
                </Tabs.Tab>
              </Tabs>
              <Tabs.Panel tab="first" {...tabs}>
                First
              </Tabs.Panel>
              <Tabs.Panel tab="second" {...tabs}>
                Second
              </Tabs.Panel>
              <Tabs.Next {...tabs}>Next</Tabs.Next>
              <Tabs.Previous {...tabs}>Previous</Tabs.Previous>
            </Block>
          )
        }}
      </Tabs.Container>
    )
  }
}

SimpleTabs.propTypes = {}

export default SimpleTabs
