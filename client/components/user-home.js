import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import { fetchUserOrders } from '../store'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  componentDidMount(){
    this.props.getUserOrders(Number(this.props.user.id))
  }

  render() {
    const {user, userOrders} = this.props
    return (
      <div>
        <h2>Welcome, {user.email}</h2>
        <div className="userOrders-container">
          <h3>Orders:</h3>
          {userOrders.map(order => (
            <Link to={`/orders/${order.id}`} key={order.id}>
              <div className="product-list-item">
                <h3>{order.date}</h3>
                <p>{order.status}</p>
              </div>
            </Link>
          ))}
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
