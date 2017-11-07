import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCart, deleteFromCart} from '../store';


class Cart extends React.Component {

  componentDidMount(){
    this.props.loadCart()
  }

  componentWillReceiveProps(nextProps){
    if(this.props.userId!==nextProps.userId) this.props.loadCart()
  }



  render(){
    const cart = this.props.cart.products
    return (
      <div>
        <div className="cart-header">
          <h2>CART</h2>
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
        <div className="cart-items">
          { cart && cart.length ?
            cart.map(item => (
              <div key={item.id}>
              <Link to={`products/${item.id}`} >
                <div className="product-list-item single-cart-item">
                  <img src={item.image}/>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <h2>Qty: {item.order_products.quantity}</h2>
                </div>
              </Link>
              <button onClick={() => {
                this.props.deleteFromCartHandler(item.id);
              }} >X</button>
              </div>
            ))
            :
            <div className="product-list-item single-cart-item">
            <h1>NO ITEMS!</h1>
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return {
    cart: state.cart,
    userId: state.user.id
  }
}

function mapDispatch(dispatch) {
  return {
    loadCart() {
      dispatch(fetchCart())
    },
    deleteFromCartHandler(id) {
      dispatch(deleteFromCart(id))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Cart))
