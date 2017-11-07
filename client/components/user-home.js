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
                <button onClick={evt =>{this.props.deleteOrder(order.id)}}>Delete Order</button>
              </div>

          ))}

        </div>
        {
          user.isAdmin ?
            <div className="admin-panel">
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
                            </Link>
                            <h4>${product.price}</h4>
                            <form onSubmit = {evt => {this.props.updateProduct(product.id, evt.target.status.value)}}>
                                <label>
                                  Inventory:
                                  <select name="status" defaultValue={product.quantity}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(status => <option value={status}>{status}</option>)}
                                  </select>
                                </label>
                                <input type="submit" value="Update Inventory"/>
                            </form>
                            <br></br>
                          <button onClick={(evt)=>{this.props.deleteProduct(product.id)}}>
                            Delete Product
                          </button>
                        </div>
                      )
                  })}
                  <div className="product-list-item" >
                  <h3>Add New Product</h3>
                  <br></br>
                    <form onSubmit={evt => {
                      evt.preventDefault()
                      const body = {
                        title: evt.target.title.value,
                        description: evt.target.description.value,
                        quantity: +evt.target.inventory.value,
                        price: +evt.target.price.value,
                        image: evt.target.imgUrl.value,
                      }
                      console.log(body)
                      this.props.addNewProduct(body)
                    }}>
                      <label>Title: <input type="text" name="title"/></label>
                      <label>Description:<input type="text" name="description"/></label>
                      <label>Price<input type="number" name="price"/></label>
                      <label>Inventory<input type="number" name="inventory"/></label>
                      <label>Image URL<input type="text" name="imgUrl"/></label>
                      <br></br>
                      <input type="submit" value="Add New Product" />
                    </form>
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
                    <form onSubmit = {evt => {this.props.updateOrderStatus(order.id, evt.target.status.value)}}>
                        <label>
                          Status Update:
                          <select name="status" defaultValue={order.status}>

                              <option value="Open">Open</option>
                              <option value="Processing">Processing</option>
                              <option value="Canceled">Canceled</option>
                              <option value="Completed">Completed</option>

                          </select>
                        </label>
                        <input type="submit" value="Update Status"/>
                    </form>

                    <br></br>

                    <button onClick={evt =>{this.props.deleteOrder(order.id)}}>Delete Order</button>
                  </div>
                ))}
              </div>


              <div>
                <h3>All Users</h3>
                {allUsers.map(user => (
                  <div key={user.id}>
                  {user.name + " - " + user.email}
                  <button onClick = {evt => {this.props.deleteUser(user.id)}}>Delete User</button>
                  </div>
                ))}
                <div>

                  <button onClick={evt => this.props.addUser(user.id)}>Add User</button>
                </div>
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

const mapDispatch = (dispatch, ownProps) => {
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
      axios.delete(`/api/orders/id/${orderId}`)
    },
    updateOrderStatus(orderId, status){
      axios.put(`/api/orders/id/${orderId}`, {status})
    },
    addNewProduct(newProduct){
      axios.post('/api/products', newProduct)
      .then(res => res.data)
      .then(product => console.log(product))
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
