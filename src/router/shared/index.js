import React from 'react'
import Layout from '../../components/Layout/Layout'
import RepositoryView from './repository/RepositoryView'
import HomeView from './home/HomeView'
import fetch from 'isomorphic-fetch'


export default [
  {
    path: '/',
    exact: true,
    render() {
      return (
        <Layout>
          <HomeView />
        </Layout>
      )
    },
  },
  {
    path: '/r/:username/:repositorySlug',
    render() { return <Layout><RepositoryView /></Layout> },
    async loadData({ store: { dispatch }, params: { repositorySlug } }) {
      const json = await fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())

      dispatch({
        type: 'SET',
        payload: json,
      })

      return {
        title: `Alo - ${repositorySlug}`,
        description: 'Teste',
        image: json.data[0].avatar,
      }
    },
  },
]

