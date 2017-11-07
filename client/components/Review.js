import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkout } from '../store';


const Review = (props) => {
  const { checkout } = props;
  console.log(checkout);
  return (
    <div>
      <h1> Hi!</h1>
      </div>
  )
}

const mapStateToProps = function (state) {
  return {
    checkout: state.checkout
  }
}

export default withRouter(connect(mapStateToProps)(Review));

//in checkout, instead of multiple dispatch, have an intermeditate state
//on submit one dispatch
//adjust models to save customer info on the backend

