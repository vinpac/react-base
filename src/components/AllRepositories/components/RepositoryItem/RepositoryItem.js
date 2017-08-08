import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fa/lib/Icon'
import './RepositoryItem.scss'

export const repositoryOnlyPropTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  starsCount: PropTypes.number.isRequired,
  indicatorColorIndex: PropTypes.number,
}

const colors = [
  '#0069ff',
  '#f95943',
  '#bd69f6',
  '#54a90c',
  '#F86FA0',
]

class RepositoryItem extends React.Component {
  static propTypes = repositoryOnlyPropTypes;

  static defaultProps = {
    picture: null,
    indicatorColorIndex: 0,
  }

  render() {
    const { path, name, description, starsCount, indicatorColorIndex } = this.props

    return (
      <Link className="repository-item" to={`/r/${path}`}>
        <span
          className="indicator"
          style={{ backgroundColor: colors[indicatorColorIndex] }}
        />
        <div className="inner">
          <h4 className="name">{name}</h4>
          <legend className="description">
            {description}
          </legend>
          <div>
            <span className="starsCount">
              <Icon name="star" className="mr-1" />
              {starsCount}
            </span>
            <span
              className="path"
              style={{ color: colors[indicatorColorIndex] }}
            >
              {path}
            </span>
          </div>
        </div>
      </Link>
    )
  }
}

export default RepositoryItem
