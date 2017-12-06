import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux';
import {fetchProducts, fetchProduct} from '../store';
import SearchResults from './SearchResults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Category from './Category';


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

        {/* <Category /> */}
        <br />
        {/* <SearchResults filteredProducts={filteredProducts} /> */}
      </div>
    )
  }
}

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

export default connect(mapStateToProps, null)(Searchbar);
