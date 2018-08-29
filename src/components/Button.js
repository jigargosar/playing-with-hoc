import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button as BaseButton} from 'reakit'

class Button extends Component {
  render() {
    return (
      <BaseButton
        {...this.props}
        style={{
          cursor:'pointer',
        }}
      />
    )
  }
}

Button.propTypes = { children: PropTypes.node.isRequired }

export default Button
