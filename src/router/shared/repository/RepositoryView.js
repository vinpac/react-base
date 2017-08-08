import React from 'react'
import { connect } from 'react-redux'

class RepositoryItem extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div>
        {!data ? 'Loading' : data.map(user => (
          <div key={user.id}>
            <img src={user.avatar} alt="" />
            {user.first_name}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ requests }) => ({
  data: requests.data,
})

export default connect(mapStateToProps)(RepositoryItem)
