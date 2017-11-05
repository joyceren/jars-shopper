import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Cart = (props) => {

  console.log(props.selectedOrder)
  const cartItems = props.selectedOrder.products || []

  return (
    <div>
      <div className="cart-header">
        <h2>CART</h2>
        <button>Checkout</button>
      </div>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="product-list-item single-cart-item">
            <img src={item.image}/>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <h2>Qty: {item.order_products.quantity}</h2>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  )

}

function mapState(state) {
  return {selectedOrder:state.selectedOrder}

}

export default connect(mapState)(Cart)
