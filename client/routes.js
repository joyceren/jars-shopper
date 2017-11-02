import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Home, Login, Signup, UserHome, AllProducts, SingleProduct, Cart, Category } from './components'
import {me, fetchProducts} from './store'


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
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component = {AllProducts} />
            <Route path="/products/:id" component = {SingleProduct} />
            <Route path="/category/:name" component = {Category} />
            <Route path="/cart" component = {Cart} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available afçter logging in */}
                  <Route path="/home" component={UserHome} />
                </Switch>
            }
            //{/* Displays our Login component as a fallback */}
            <Route component={Home} />
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
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchProducts())
      dispatch(fetchOrder())
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
