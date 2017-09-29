import React from 'react'
import PropTypes from 'prop-types'

const ErrorView = ({ error }) => {
  if (__DEV__ && error) {
    return (
      <div className="container viewSpacer">
        <h1>{error.name}</h1>
        <pre className="fancyScrollbar">{error.stack}</pre>
      </div>
    )
  }

  return (
    <div className="container viewSpacer">
      <h1>Error</h1>
      <p>Sorry, a ctritical error ocurred on this page.</p>
    </div>
  )
}

ErrorView.displayName = 'ErrorView'

ErrorView.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
  }),
}

ErrorView.defaultProps = {
  error: null,
}

export default ErrorView
