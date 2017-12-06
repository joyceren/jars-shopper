
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';



export default class SearchResults extends Component {
  render() {
    const showProducts = this.props.filteredProducts;

    return (

      <div className='all-products'>

        <div>

          {showProducts && showProducts.map( product => (
            <Card className='single-product col-lg-4 col-md-4 col-sm-4' key={product.id}>
              <br />
              <Link value={product.id} to={`/products/${product.id}`}>
                <CardMedia>
                  <img src={`/images/${product.imageName}`}
                      className='card-image img-responsive'/>

                </CardMedia>
                <CardTitle title={product.title} subtitle={`Price: $${product.price}`} />
                <CardText>
                  { product.description }
                </CardText>
              </Link>
            </Card>
          ) )}
        </div>
      </div>
    )
  }
}
