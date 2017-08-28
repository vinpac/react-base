import React from 'react'
import { connect } from 'react-redux'
import img from './img.jpg'

class RepositoryView extends React.Component {
  render() {
    const { data, children } = this.props

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
  data: requests.payload ? requests.payload.data : null,
})

export default connect(mapStateToProps)(RepositoryView)
