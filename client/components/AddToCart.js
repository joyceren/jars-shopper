import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct } from '../store'

export default class AddToCart extends Component {

  constructor() {
    super();
    this.state = {
      quantity: 1
    }
    this.decreaseQty=this.decreaseQty.bind(this)
    this.increaseQty=this.increaseQty.bind(this)
  }

  decreaseQty () {
    this.setState({quantity:this.state.quantity--})
    console.log(this.state.quantity)
  }

  increaseQty () {
    this.setState({quantity:this.state.quantity++})
    console.log(this.state.quantity)
  }

  render() {
    const quantity = this.state.quantity
    return (
      <div>
        <h3>{quantity}</h3>
        <button onClick={this.decreaseQty}>-</button>
        <button onClick={this.increaseQty}>+</button>
        <button>Add to Cart</button>
      </div>
    )
  }

}
