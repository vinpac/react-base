import React from 'react'
import Layout from '../../../components/Layout/Layout.scss'
import HomeView from './HomeView'

export default {
  path: '/',
  action() {
    return {
      component: <Layout><HomeView /></Layout>,
    }
  },
}
