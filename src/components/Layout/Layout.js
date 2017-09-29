import PropTypes from 'prop-types'
import React from 'react'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <div className="layout">
        {React.Children.only(children)}
      </div>
    )
  }
}

export default Layout
