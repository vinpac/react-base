import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { DEFAULT_CONTEXT } from '../../core/constants'

class AsyncRoute extends React.Component {
  static propTypes = {
    loadData: PropTypes.func,
  };

  static defaultProps = {
    loadData: null,
  };

  state = {};

  async componentWillMount() {
    const { loadData, store, match } = this.props

    if (!loadData) {
      return
    }

    const context = await loadData({
      ...match,
      store,
    })

    this.setState({
      context: {
        ...DEFAULT_CONTEXT,
        ...context,
      },
    })
  }

  render() {
    const { context } = this.state

    return (
      <div className="route-wrapper">
        {context &&
          <Helmet>
            {context.title && [
              <title key={0}>{context.title}</title>,
              <meta key={1} name="title" content={context.title} />,
              <meta key={2} property="og:title" content={context.title} />,
            ]}
            {context.image && [
              <meta key={3} name="image" content={context.image} />,
              <meta key={4} property="og:image" content={context.image} />,
            ]}
            {context.description && [
              <meta key={5} name="description" content={context.description} />,
              <meta key={6} property="og:description" content={context.description} />,
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

AsyncRouteConnect.displayName = 'AsyncRouteConnect'

export default AsyncRouteConnect

