import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {fetchOrder} from '../store';

class Order extends React.Component {

  componentDidMount(){
    this.props.getOrder(Number(this.props.match.params.id))
  }

  // componentWillReceiveProps(nextProps){
  //   this.props=nextProps
  // }

  render() {
    const {order} = this.props
    return (
      <div>
        <h2>ORDER #: {order.id}</h2>
        <div className="cart-items">
        <hr />
          <h2>PRODUCTS:</h2>
          {order.products && order.products.map(item => (
            <div key={item.id} className="product-list-item single-cart-item">
              <img src={item.image}/>
              <h3>{item.title}</h3>
              <p>${item.order_products.currentPrice}</p>
              <h2>Qty: {item.order_products.quantity}</h2>
            </div>
          ))}
        </div>
        <div className="navbar">
          <h2>ORDER STATUS: {order.status}</h2>
          <h2>TOTAL: ${order.total}</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    order: state.selectedOrder
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getOrder(id){
      dispatch(fetchOrder(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));
