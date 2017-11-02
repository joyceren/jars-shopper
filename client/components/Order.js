import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

class Order extends React.Component {

constructor() {
    super();
  }

  render() {
    return (
  <div>

  </div>
    )
  }


}

const mapStateToProps = function(state) {
  return {
    order: state.order
  }
}

connect(mapStateToProps)(Order);















