import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchCategoryProducts } from '../store'

class Category extends React.Component {

  componentDidMount() {
    this.props.getCategoryProducts(this.props.match.params.name);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    const filteredProducts = this.props.filteredProducts

    return (
      <div>
        <h1>{this.props.match.params.name}</h1>
        <div className='all-products'>
        {filteredProducts && filteredProducts.map( product => {
            return (
              <div key={product.id} className="ProductListItem" >
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
      filteredProducts: state.categoryProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getCategoryProducts(name) {
        dispatch(fetchCategoryProducts(name))
      }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Category)
