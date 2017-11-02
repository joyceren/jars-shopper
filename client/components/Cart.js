import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <h1>CART</h1>
      </div>
    )
  }
}

function mapState(state) {
  return {state}

}

export default connect(mapState)(Cart)
