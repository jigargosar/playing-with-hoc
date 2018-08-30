import React, {Component} from 'react'
import {Block, Tabs} from 'reakit'
import {merge} from 'ramda'

// import PropTypes from 'prop-types';

class SimpleTabs extends Component {
  render() {
    const loop = true
    return (
      <Tabs.Container>
        {childProps => {
          const tabs = merge(childProps, { loop })
          return (
            <Block>
              <Tabs>
                <Tabs.Previous {...tabs}>{'<'}</Tabs.Previous>
                <Tabs.Tab tab="first" {...tabs}>
                  First
                </Tabs.Tab>
                <Tabs.Tab tab="second" {...tabs}>
                  Second
                </Tabs.Tab>
                <Tabs.Next {...tabs}>{'>'}</Tabs.Next>
              </Tabs>
              <Tabs.Panel tab="first" {...tabs}>
                First
              </Tabs.Panel>
              <Tabs.Panel tab="second" {...tabs}>
                Second
              </Tabs.Panel>
            </Block>
          )
        }}
      </Tabs.Container>
    )
  }
}

SimpleTabs.propTypes = {}

export default SimpleTabs
