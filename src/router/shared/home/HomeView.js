import React from 'react'
import AllRepositories from '../../../components/AllRepositories/AllRepositories'

const HomeView = () => (
  <div className="view-home">
    <div className="container view-spacer">
      <AllRepositories />
    </div>
  </div>
)

HomeView.displayName = 'HomeView'

export default HomeView
