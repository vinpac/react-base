import React from 'react'
import Layout from '../../../components/Layout/Layout'
import RepositoryView from './RepositoryView'

export default {
  path: '/:username/:repositorySlug',
  action() {
    return {
      component: (
        <Layout>
          <RepositoryView />
        </Layout>
      ),
    }
  },
}
