import React, {Component} from 'react'
import {Block, Tabs} from 'reakit'
import {addIndex, map, merge} from 'ramda'
import PropTypes from 'prop-types'

const mapIndexed = addIndex(map)

class SimpleTabs extends Component {
  render() {
    const { tabHeaderList, tabContentList, loop = false } = this.props
    return (
      <Tabs.Container>
        {childProps => {
          const tapProps = merge(childProps, { loop })
          return (
            <Block>
              <Tabs>
                <Tabs.Previous {...tapProps}>{'<'}</Tabs.Previous>
                {mapIndexed((content, idx) => (
                  <Tabs.Tab tab={`${idx}`} {...tapProps}>
                    {content}
                  </Tabs.Tab>
                ))(tabHeaderList)}
                <Tabs.Next {...tapProps}>{'>'}</Tabs.Next>
              </Tabs>
              {mapIndexed((content, idx) => (
                <Tabs.Panel tab={`${idx}`} {...tapProps}>
                  {content}
                </Tabs.Panel>
              ))(tabContentList)}
            </Block>
          )
        }}
      </Tabs.Container>
    )
  }
}

SimpleTabs.propTypes = {
  tabHeaderList: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  tabContentList: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  loop: PropTypes.bool,
}

SimpleTabs.defaultProps = {
  loop: true,
}

export default SimpleTabs
