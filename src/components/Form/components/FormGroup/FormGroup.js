import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './FormGroup.scss'

const FormGroup = ({ className, children, error, warning }) => (
  <div
    className={cx('formGroup', className, {
      'formGroup--state-error': error,
      'formGroup--state-warn': warning && !warning,
    })}
  >
    {children}
  </div>
)

FormGroup.displayName = 'FormGroup'

FormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.bool,
  warning: PropTypes.bool,
}

FormGroup.defaultProps = {
  className: '',
  children: null,
  error: false,
  warning: false,
}

export default FormGroup
