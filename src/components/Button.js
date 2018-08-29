import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          background: 'transparent',
          border: 'none',
          cursor:'pointer'
        }}
      />
    )
  }
}

Button.propTypes = { children: PropTypes.node.isRequired }

export default Button
