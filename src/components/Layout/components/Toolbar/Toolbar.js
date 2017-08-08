import React from 'react'
import Icon from 'react-fa/lib/Icon'
import Logo from '../../../Logo/Logo'
import { Link } from 'react-router-dom'
import './Toolbar.scss'
import ToolbarSearch from './components/ToolbarSearch/ToolbarSearch'

const user = {
  username: 'vinpac',
  avatar: 'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
}

const Toolbar = () => (
  <div className="toolbar">
    <div className="container">
      <div className="toolbar-block">
        <div className="toolbar-brand">
          <Link to="/">
            <Logo color="#fff" />
          </Link>
        </div>
        {/*
          <div className="toolbar-form">
            <ToolbarSearch />
          </div>
          <div className="pull-xs-right">
            <button className="btn btn-toolbar iconed">
              <Icon name="plus" />
            </button>
            <button className="btn btn-toolbar iconed">
              <Icon name="bell-o" />
            </button>
            <button className="btn btn-toolbar btn-toolbar-user">
              <div className="btn-toolbar-avatar">
                <img src={user.avatar} alt={user.username} />
              </div>
              <span className="btn-toolbar-username">{user.username}</span>
              <Icon name="angle-down" />
            </button>
        </div>
        */}
      </div>
    </div>
  </div>
)

Toolbar.displayName = 'Toolbar'


export default Toolbar
