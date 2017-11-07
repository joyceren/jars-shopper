import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import { fetchUserOrders, fetchProducts, fetchAllUsers, fetchAllOrders } from '../store'
import axios from 'axios';

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  componentDidMount(){
    this.props.getUserOrders(Number(this.props.user.id))
    this.props.getAllAdminInfo()
  }

  render() {
    const {user, userOrders, allProducts, allOrders, allUsers} = this.props
    return (
      <div>
        <h2>Welcome, {user.email}</h2>
        <div className="userOrders-container">
          <h3>Your Orders:</h3>

          {userOrders.map(order => (

              <div key={order.id} className="product-list-item">
                <Link to={`/orders/${order.id}`}>
                  <h3>{order.date}</h3>
                  <p>{order.status}</p>
                </Link>
                <button>Delete Order</button>
              </div>

          ))}

        </div>
        {
          user.isAdmin ?
            <div>
              <h2>Admin Panel</h2>

              <div className="userOrders-container">
                <h3>All Products</h3>
                <div className='all-products'>
                  {allProducts.map( product => {
                      return (
                        <div key={product.id} className="product-list-item" >
                          <Link to={`/products/${product.id}`}>
                              <img src = {product.image} />
                              <h3>{product.title}</h3>
                              <h4>${product.price}</h4>
                          </Link>
                          <button onClick={(evt)=>{this.props.deleteProduct(product.id)}}>
                            Delete Product
                          </button>
                        </div>
                      )
                  })}
                  <div className="product-list-item" >
                    <button className="product-list-item">Add New Product</button>
                  </div>
                </div>
              </div>

              <div>
                <h3>All Orders</h3>
                {allOrders.map(order => (
                  <div key={order.id} className="product-list-item">
                    <Link to={`/orders/${order.id}`}>
                      <h3>{order.date}</h3>
                      <p>{order.status}</p>
                    </Link>
                    <button onClick={(evt)=>{this.props.deleteOrder(order.id)}}>Delete Order</button>
                  </div>
                ))}
              </div>

              <div>
                <h3>All Users</h3>
                {allUsers.map(user => (
                  <div key={user.id}>
                  {user.name + " - " + user.email}
                  </div>
                ))}
              </div>

            </div>
          :
            <div>
            </div>
        }
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
    userOrders:state.userOrders,
    allProducts: state.products,
    allUsers: state.users,
    allOrders: state.orders,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUserOrders(userId) {
      dispatch(fetchUserOrders(userId))
    },
    getAllAdminInfo() {
      dispatch(fetchAllOrders())
      dispatch(fetchAllUsers())
    },
    deleteUser(userId){
      axios.delete(`/api/users/${userId}`)
    },
    deleteProduct(productId){
      axios.delete(`/api/products/${productId}`)
    },
    deleteOrder(orderId){
      axios.delete(`/api/orders/${orderId}`)
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
