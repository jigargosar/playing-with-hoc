import React, {Component} from 'react'
import {Block, Tabs} from 'reakit'
import {addIndex, map, merge} from 'ramda'

// import PropTypes from 'prop-types';
const mapIndexed = addIndex(map);

class SimpleTabs extends Component {
  render() {
    const {tabs, loop=false} = this.props
    return (
      <Tabs.Container>
        {childProps => {
          const tapProps = merge(childProps, { loop })
          return (
            <Block>
              <Tabs>
                <Tabs.Previous {...tapProps}>{'<'}</Tabs.Previous>
                {mapIndexed((content,idx)=><Tabs.Tab tab={`${idx}`} {...tapProps}>
                  {content}
                </Tabs.Tab>)(tabs)}
                <Tabs.Next {...tapProps}>{'>'}</Tabs.Next>
              </Tabs>
              <Tabs.Panel tab="first" {...tapProps}>
                First
              </Tabs.Panel>
              <Tabs.Panel tab="second" {...tapProps}>
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
