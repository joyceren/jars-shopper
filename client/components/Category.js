import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchCategoryProducts } from '../store'

class Category extends React.Component {

  componentDidMount() {
    this.props.getCategoryProducts(this.props.match.params.name);
  }

  componentWillReceiveProps(nextProps) {
    this.props=nextProps;
    if(this.props.filteredCategory.name !== this.props.match.params.name){
      this.props.getCategoryProducts(this.props.match.params.name);
    }
  }

  render() {
    const filteredProducts = this.props.filteredCategory.products
    return (
      <div>
        <h2>{this.props.match.params.name.toUpperCase()}</h2>
        <div className='all-products'>
          {filteredProducts && filteredProducts.map( product => {
              return (
                <div key={product.id} className="product-list-item" >
                  <Link to={`/products/${product.id}`}>
                      <img src = {product.image} />
                      <h3>{product.title}</h3>
                      <h4>${product.price}</h4>
                  </Link>
                </div>
              )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
      filteredCategory: state.categoryProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getCategoryProducts(name) {
        dispatch(fetchCategoryProducts(name))
      }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))
