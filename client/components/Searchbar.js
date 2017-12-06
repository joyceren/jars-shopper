import React, { Component } from 'react';
import PropTypes from 'prop-types'
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchProducts, fetchProduct} from '../store';

export class Searchbar extends Component {
constructor(props) {
  super(props);
  this.state = {
    productNames: [],
    query: ''
  }
  this.getProductNames = this.getProductNames.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleNewRequest = this.handleNewRequest.bind(this);
  this.clearQuery = this.clearQuery.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentWillReceiveProps(newProps) {
  if (newProps !== this.props ) {
    this.props = newProps;
  }
}


handleInput(query) {
  this.setState({
    query: query
  });
}

handleNewRequest() {
  this.setState({
    query: this.state.query
  });
}

clearQuery() {
  this.setState({
    query: ''
  })
}

handleSubmit(event) {
  event.preventDefault();

  let products = this.props.products;
  for (let i = 0; i < products.length; i++) {
    if (this.state.query === products[i].title) {
      this.context.router.history.push(`/products/${products[i].id}`);
    }
  }
  this.clearQuery();
  }

getProductNames(products) {
  let productNames = [];
  for (let i = 0; i < products.length; i++) {
    productNames.push(products[i].title);
  }
  return productNames;
}


render() {
  const productNames = this.getProductNames(this.props.products)

  const filteredProducts = this.props.products.filter(
            product => product.title.toLowerCase().match(this.state.query.toLowerCase()));
  return (
    <div className="container">
      <form onSubmit={ this.handleSubmit }>
        <AutoComplete
          hintText="Type in a product name here"
          filter={ AutoComplete.fuzzyFilter }
          dataSource={ productNames }
          floatingLabelText="Search"
          searchText={this.state.query}
          onUpdateInput={this.handleInput}
          onNewRequest={this.handleNewRequest}
          fullWidth={ true }
        />
      </form>
      <br />
    </div>
  )
}
}

Searchbar.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = function (state) {
return {
  products: state.products,
}
}

// const mapDispatchToProps = function (dispatch) {
//   return {
//     fetchProduct: function(product) {
//       return dispatch(fetchProduct(product))
//     }
//   }
// }

export default withRouter(connect(mapStateToProps, null)(Searchbar));
