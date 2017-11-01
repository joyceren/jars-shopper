import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct } from '../store'


function SingleProduct(props){
  return(
      <div>
          <h1>{props.product.title}</h1>
          <img src = {props.product.image}/>
          <h3>{props.product.description}</h3>
          {
            props.product.reviews.map(review => {
              return (
                <div>
                </div>
              )
            })
          }


      </div>
  )
}


const mapStateToProps = function (state, ownProps) {

}

export default(connect(mapStateToProps)(SingleProduct));
