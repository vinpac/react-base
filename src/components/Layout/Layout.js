import PropTypes from 'prop-types'
import React from 'react'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import '../App/App.scss'
import Toolbar from './components/Toolbar/Toolbar'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <div className="layout-default">
        <Toolbar />
        {React.Children.only(children)}
      </div>
    )
  }
}

export default Layout
