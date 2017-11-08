import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct, addToCart } from '../store'


//change to class with componentDidMount and componentWillReceiveProps
class SingleProduct extends React.Component {

  componentDidMount() {
    this.props.getProduct(Number(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }
  // I'm not sure what this does?

  render () {

    const product = this.props.product;
    console.log('Product Id', product.id)
    const qtyArr = new Array(10).fill(0)

    return(
        <div>
            <h1>{product.title}  ${product.price}</h1>
            <img src = {product.image}/>

            <div className="AddToCart">
              <form onSubmit={(evt) => {
                evt.preventDefault();
                this.props.addToCartHandler(product.id, evt.target.quantity.value);
              }}>
                <select name="quantity">
                  {qtyArr.map((e, i) => (
                    <option key={i} value={i+1}>{i+1}</option>
                  ))}
                </select>
                <input type="submit" value="Add to Cart"></input>
              </form>
            </div>

            <div className="product-description">

              <h3>Inventory: {product.quantity}</h3>
              <p>{product.description}</p>
              <h2>Reviews</h2>
              <div className='reviews-container'>

              { this.props.isLoggedIn ?

                <div>
                  <form>
                    <label>Stars:</label>
                    <input type="radio" name="stars" value="0" />
                    <input type="radio" name="stars" value="1" />
                    <input type="radio" name="stars" value="2" />
                    <input type="radio" name="stars" value="3" />
                    <input type="radio" name="stars" value="4" />
                    <input type="radio" name="stars" value="5" />
                    <br></br>
                    <input type="text" name="text" value="review"/>
                    <input type="submit" />
                  </form>
                </div>
                :
                <div>
                Log in to Leave a Review!
                </div>

              }

                {
                  product.reviews && product.reviews.map(review => {

                    return(
                    <div key={review.id} className="single-review">
                      <h3 className="underlined">{review.title}</h3>
                      <div>{'+'.repeat(review.stars)}</div>
                      <h4>{review.user.googleId}</h4>
                      <p>{review.text}</p>
                    </div>
                  )})
                }
              </div>

            </div>

        </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
     product: state.product,
     isLoggedIn: !!state.user.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct(id) {dispatch(fetchProduct(id))},
    addToCartHandler(productId, quantity) {
      dispatch(addToCart(productId, quantity))
    }
  }
}

export default(connect(mapStateToProps, mapDispatchToProps)(SingleProduct));
