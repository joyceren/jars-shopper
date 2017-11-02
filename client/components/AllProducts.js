import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from '../store'


const mapStateToProps = function (state) {
    return {
        products: state.products,
    }
}

const AllProducts = (props) => {
    return(
        <div>
          <h2>All of our Dragons!</h2>
            <div className='all-products'>
              {props.products.map( product => {
                  return (
                    <Link to={`/products/${product.id}`}>
                      <div key={product.id} className="ProductListItem" >
                          <img src = {product.image} />
                          <h3>{product.title}</h3>
                          <h4>${product.price}</h4>
                      </div>
                    </Link>
                  )
              })}
            </div>
        </div>
    )
}



export default connect(mapStateToProps)(AllProducts);
