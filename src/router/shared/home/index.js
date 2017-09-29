import React from 'react'
import Layout from '../../../components/Layout'
import HomeView from './HomeView'

export default {
  path: '/',
  exact: true,
  render: () => <Layout><HomeView /></Layout>,
}
