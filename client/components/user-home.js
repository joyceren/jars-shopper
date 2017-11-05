import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import fetchUserOrders from '../store'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  componentDidMount() {
    // this.props.getUserOrders(this.props.user.id)
  }

  componentWillReceiveProps(nextProps) {
    this.props=nextProps;
  }

  render() {
    console.log(this.props)
    const {user} = this.props
    return (
      <div>
        <h3>Welcome, {user.email}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUserOrders(userId) {
      dispatch(fetchUserOrders(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
