import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct } from '../store'



//change to class with componentDidMount and componentWillReceiveProps
class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(Number(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }
  // I'm not sure whtat this does?

  render () {
    console.log(this.props)
    const product = this.props.product;
    return(
        <div>
            <h1>{product.title}</h1>
            <img src = {product.image}/>
            <h3>{product.description}</h3>
        </div>
    )
  }
}


const mapStateToProps = function (state) {
  console.log(state)
  return {
     product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct (id){
      dispatch(fetchProduct(id))
    }
  }
}

export default(connect(mapStateToProps, mapDispatchToProps)(SingleProduct));
