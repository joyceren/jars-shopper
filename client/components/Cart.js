import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Cart extends Component {
  constructor() {
    super();
    this.cartItems = [
      {id: 1, title:"Hungarian Horntail", image:"http://3.bp.blogspot.com/-QKPXb-BH9E4/UY0IDGlydUI/AAAAAAAAAfs/PqrxkA20YC4/s1600/hun1.jpg", price: 1000, quantity:1},
      {id: 2, title:"Hungarian Horntail", image:"http://3.bp.blogspot.com/-QKPXb-BH9E4/UY0IDGlydUI/AAAAAAAAAfs/PqrxkA20YC4/s1600/hun1.jpg", price: 1000, quantity:1}
    ]
  }

  render() {
    console.log(this.cartItems)
    return (
      <div>
        <h1>CART</h1>
        <div className="cart-items">
          {this.cartItems.map(item => (
            <div key={item.id} className="single-cart-item">
              <img src={item.image}/>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <h2>Qty: {item.quantity}</h2>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return {state}

}

export default connect(mapState)(Cart)
