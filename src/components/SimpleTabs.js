import React, {Component} from 'react'
import {Block, Tabs} from 'reakit'

// import PropTypes from 'prop-types';

class SimpleTabs extends Component {
  render() {
    return (
      <Tabs.Container>
        {({
          register,
          unregister,
          isCurrent,
          show,
          next,
          hasNext,
          previous,
          hasPrevious,
        }) => (
          <Block>
            <Tabs>
              <Tabs.Tab
                tab="first"
                register={register}
                unregister={unregister}
                isCurrent={isCurrent}
                show={show}
                next={next}
                previous={previous}
              >
                First
              </Tabs.Tab>
              <Tabs.Tab
                tab="second"
                register={register}
                unregister={unregister}
                isCurrent={isCurrent}
                show={show}
                next={next}
                previous={previous}
              >
                Second
              </Tabs.Tab>
            </Tabs>
            <Tabs.Panel tab="first" isCurrent={isCurrent}>
              First
            </Tabs.Panel>
            <Tabs.Panel tab="second" isCurrent={isCurrent}>
              Second
            </Tabs.Panel>
            <Tabs.Next next={next} hasNext={hasNext}>
              Next
            </Tabs.Next>
            <Tabs.Previous previous={previous} hasPrevious={hasPrevious}>
              Previous
            </Tabs.Previous>
          </Block>
        )}
      </Tabs.Container>
    )
  }
}

SimpleTabs.propTypes = {}

export default SimpleTabs
