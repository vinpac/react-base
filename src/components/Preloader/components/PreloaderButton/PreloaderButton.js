import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Preloader from '../../Preloader'
import './PreloaderButton.scss'

const PreloaderButton = ({
  component: Component,
  children,
  disabled,
  loading,
  disableIfLoading,
  className,
  ...props
}) => (
  <Component
    disabled={(disableIfLoading && loading) || disabled}
    className={cx(className, 'preloaderButton', {
      'preloaderButton--loading': loading,
    })}
    {...props}
  >
    {loading && <Preloader /> }
    <span className="preloaderButton__children">
      {children}
    </span>
  </Component>
)

PreloaderButton.displayName = 'PreloaderButton'

PreloaderButton.propTypes = {
  className: PropTypes.string,
  disableIfLoading: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
}

PreloaderButton.defaultProps = {
  className: '',
  disableIfLoading: true,
  loading: false,
  disabled: false,
  children: null,
  component: 'button',
}

export default PreloaderButton
