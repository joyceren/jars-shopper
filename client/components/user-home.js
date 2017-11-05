import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import { fetchUserOrders } from '../store'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  componentDidMount() {
    this.props.getUserOrders(this.props.user.id)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props=nextProps;
  //   this.props.getUserOrders(this.props.user.id)
  // }

  render() {
    console.log(this.props)
    const {user} = this.props
    return (
      <div>
        <h3>Welcome, {user.email}</h3>
        <div>
          {this.props.userOrders.map(order => {
            <div>
              <h3>{order.date}</h3>
              <p>{order.status}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    userOrders:state.userOrders
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUserOrders(userId) {
      dispatch(fetchUserOrders(userId))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(UserHome))

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
