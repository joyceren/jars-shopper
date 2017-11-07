import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkout } from '../store';
import axios from 'axios';

class ReviewOrder extends Component {
//const ReviewOrder = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      checkout: {}
    };


    }

  componentDidMount () {
    this.fetchCart();
  }


  fetchCart() {
    axios.get(`/api/cart/`)
      .then(res => res.data)
      .then(cart => {
        console.log('HEERRRE');
        console.log(cart);
        this.setState({ cart });
      });
  }

  render() {
    const cart = this.state.cart;
    console.log('CART');
    console.log(cart);
    console.log('Checkout');
    console.log(this.props.checkout);
    const checkout = this.props.checkout;

    return (

      <div>
        <h1> Review Your Order!</h1>

        <div>
        <h3> Billing Information</h3>
        <h5>Name: {checkout.fullName} </h5>
        <h5>Address: {checkout.billingAddress} </h5>
        <h5>City: {checkout.billingCity} </h5>
        <h5>State: {checkout.billingState} </h5>
        <h5>Zip: {checkout.billingZip} </h5>
        </div>


        <h3>Shipping Information</h3>

        <h3> Your Order</h3>
        {cart.products && cart.products.map(item => (
            <div key={item.id} className="product-list-item single-cart-item">
              <img src={item.image}/>
              <h4>{item.title}</h4>
              <p>${item.order_products.currentPrice}</p>
              <h4>Qty: {item.order_products.quantity}</h4>
            </div>
          ))}
          <h4>TOTAL: ${cart.total}</h4>





        </div>

  )

  }
}

const mapStateToProps = function (state) {
  return {
    checkout: state.checkout,
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(ReviewOrder));

//in checkout, instead of multiple dispatch, have an intermeditate state
//on submit one dispatch
//adjust models to save customer info on the backend

