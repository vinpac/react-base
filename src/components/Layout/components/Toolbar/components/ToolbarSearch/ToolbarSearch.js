import React from 'react'
import Icon from 'react-fa/lib/Icon'
import './ToolbarSearch.scss'

class ToolbarSearch extends React.Component {
  render() {
    return (
      <div className="toolbar-search">
        <input
          type="text"
          placeholder="Search for repositories"
          className="field borderless"
        />
        <Icon name="search" />
      </div>
    )
  }
}

export default ToolbarSearch
