import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Cart extends Component {
  constructor() {
    super();
    this.cartItems = [
      {id: 1, title:"Hungarian Horntail", image:"http://media.immediate.co.uk/volatile/sites/3/2016/10/119142.jpg?quality=90&resize=620,413", price: 1000, quantity:1},
      {id: 2,  title: 'Dragon2', description: 'dragon 2', price: '97', quantity: 4, image: "https://previews.123rf.com/images/nataka/nataka1304/nataka130400010/19088142-cute-dragon-vector-Stock-Vector-baby.jpg"}
    ]
  }

  render() {
    return (
      <div>
        <h1>CART</h1>
        <div className="cart-items">
          {this.cartItems.map(item => (
            <div key={item.id} className="product-list-item single-cart-item">
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
