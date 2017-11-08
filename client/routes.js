import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Home, Login, Signup, UserHome, AllProducts, SingleProduct, Cart, Category, Sidebar, Order, Checkout, NewProductForm, ReviewOrder } from './components'
import {me, fetchProducts, fetchCategories} from './store'


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData();
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors
            - Question: is switch necessary if we're using exact? */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component = {AllProducts} />
            <Route exact path="/products/:id" component = {SingleProduct} />
            <Route path="/products/categories/:name" component = {Category} />
            <Route exact path="/categories" component = {Sidebar} />
            <Route path="/cart" component = {Cart} />
            <Route exact path = "/checkout" component = {Checkout} />
            <Route path="/orders/:id" component = {Order} />
            <Route path= "/review" component = {ReviewOrder} />
            <Route exact path="/" component = {Home} />


            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available afçter logging in */}
                  <Route path="/home" component={UserHome} />
                </Switch>
            }
            //{/* Displays our Login component as a fallback */}
            <Route exact path="/" component={Home} />

          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,

  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData (userId) {
      dispatch(me())
      dispatch(fetchProducts())
      dispatch(fetchCategories())
      console.log("initial data loaded")
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
