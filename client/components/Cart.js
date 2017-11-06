import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCart} from '../store';


class Cart extends React.Component {

  componentDidMount(){
    this.props.loadCart(this.props.userId)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.userId!==nextProps.userId) this.props.loadCart(this.props.userId)
  }

  render(){
    const cart = this.props.cart.products

    return (
      <div>
        <div className="cart-header">
          <h2>CART</h2>
          <button>Checkout</button>
        </div>
        <div className="cart-items">
          { cart && cart.length ?
            cart.map(item => (
              <div key={item.id} className="product-list-item single-cart-item">
                <img src={item.image}/>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <h2>Qty: {item.order_products.quantity}</h2>
                <button>X</button>
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
    cart:state.cart,
    userId:state.user.id
  }
}

function mapDispatch(dispatch) {
  return {
    loadCart(userId) {
      dispatch(fetchCart(userId))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Cart))
