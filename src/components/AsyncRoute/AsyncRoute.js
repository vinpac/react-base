import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class AsyncRoute extends React.Component {
  static propTypes = {
    loadData: PropTypes.func,
  };

  static defaultProps = {
    loadData: () => ({}),
  };

  state = {};

  async componentWillMount() {
    const { loadData, store, match } = this.props
    const context = await loadData({
      ...match,
      store,
    })

    this.setState({ context })
  }

  render() {
    const { context } = this.state

    return (
      <div className="route-wrapper">
        {context &&
          <Helmet>
            {context.title && [
              <title key={0}>{context.title}</title>,
              <meta key={1} property="title" content="{{title}}" />,
              <meta key={2} property="og:title" content="{{title}}" />,
            ]}
            {context.image && [
              <meta key={3} property="image" content="{{image}}" />,
              <meta key={4} property="og:image" content="{{image}}" />,
            ]}
            {context.description && [
              <meta key={5} property="description" content="{{description}}" />,
              <meta key={6} property="og:description" content="{{description}}" />,
            ]}
          </Helmet>
        }
        <Route
          {...this.props}
        />
      </div>
    )
  }
}

const AsyncRouteConnect = props => (
  <Route
    {...props}
    render={subprops => (
      <AsyncRoute {...props} {...subprops} />
    )}
  />
)

AsyncRouteConnect.displayName = 'Component'

export default AsyncRouteConnect

