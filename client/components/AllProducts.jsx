import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsThunk} from './reducers'

const mapStateToProps = function (state) {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        getAllProducts: () => {
            dispatch(fetchProducts())
        }
    };
};


const AllProducts = (props) => {
    return(
        <div>
            {props.products.map( product =>{
                return (
                    <div key={product.id} className="ProductListItem" >
                        <img src = {product.image} />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                    </div>
                )
            })}
        </div>
    )
}





export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);