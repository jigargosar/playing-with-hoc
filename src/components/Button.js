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
          cursor:'pointer',
          padding:"0.3rem 0.5rem"
        }}
      />
    )
  }
}

Button.propTypes = { children: PropTypes.node.isRequired }

export default Button
