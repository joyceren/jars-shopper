import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct } from '../store'



//change to class with componentDidMount and componentWillReceiveProps
class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct();
  }

  // componentWillReceiveProps(nextProps) {
  //
  // }
  // I'm not sure whtat this does?

  render () {
    return(
        <div>
            <h1>{props.product.title}</h1>
            <img src = {props.product.image}/>
            <h3>{props.product.description}</h3>
        </div>
    )
  }
}


const mapStateToProps = function (state, ownProps) {
  // console.log(state, ownProps)
  // return {
  //   product: state.products.find(product => product.id===Number(ownProps.match.params.id))
  // }
}

const mapDispatchToProps = (dispatch) => ({
  getProduct () {
    dispatch(fetchProduct())
  }
})

export default(connect(mapStateToProps)(SingleProduct));
