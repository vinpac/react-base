import PropTypes from 'prop-types'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'


const ContextType = {
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  ...ReduxProvider.childContextTypes,
}

class App extends React.Component {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context
  }

  render() {
    const { children } = this.props
    return (
      <div id="app">
        {children}
      </div>
    )
  }
}

export default App
