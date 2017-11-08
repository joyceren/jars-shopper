import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCart, deleteFromCart} from '../store';


class Cart extends React.Component {

  componentDidMount(){
    this.props.loadCart()
  }

  componentWillReceiveProps(nextProps){
    this.props = nextProps;
    if(this.props.cart.id!==nextProps.cart.id) this.props.loadCart()
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
              <div key={item.id} className="product-list-item single-cart-item">

                <div className="single-cart-item">
                  <Link to={`products/${item.id}`} >
                      <img src={item.image}/>
                  </Link>

                  <Link to={`products/${item.id}`} >
                      <h3>{item.title}</h3>
                  </Link>

                  <p>${item.price}</p>

                  <h2>Qty: {item.order_products.quantity}</h2>

                  <button onClick={() => {
                    this.props.deleteFromCartHandler(item.id);
                    this.forceUpdate()
                  }} >X</button>

                </div>

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
