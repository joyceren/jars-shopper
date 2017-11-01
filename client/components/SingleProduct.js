import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct } from '../store'


function SingleProduct(props){
  console.log('props of SingleProduct=',props)
  return(
      <div>
          <h1>{props.product.title}</h1>
          <img src = {props.product.image}/>
          <h3>{props.product.description}</h3>
      </div>
  )
}


const mapStateToProps = function (state, ownProps) {
  return {
    product: state.products.find(product => product.id===Number(ownProps.match.params.id))
  }
}

export default(connect(mapStateToProps)(SingleProduct));
