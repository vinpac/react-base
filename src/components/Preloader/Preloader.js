import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Preloader.scss'

const Preloader = ({ theme, size, className }) => (
  <div
    className={cx('preloader', {
      [`preloader--theme-${theme}`]: theme,
      [`preloader--size-${size}`]: size,
    }, className)}
  >
    <span className="preloader__item preloader__item1" />
    <span className="preloader__item preloader__item2" />
    <span className="preloader__item preloader__item3" />
  </div>
)

Preloader.displayName = 'Preloader'

Preloader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
}

Preloader.defaultProps = {
  className: '',
  size: 'default',
  theme: null,
}

export default Preloader
