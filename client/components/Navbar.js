import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {logout} from '../store';

const Navbar = (props) => {
  const {handleClick, isLoggedIn} = props


  return (
    <nav className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <h2>Types of Dragons</h2>
            <div>
              <Link to={`/products`}>ALL</Link>
            </div>
            {props.categories.map((cat)=> (
                <div key= {cat.id}>
                  <Link to={`/products/categories/${cat.name}`}>{cat.name.toUpperCase()}</Link>
                </div>
              )
            )}
        </div>
      </div>

      <Link to="/"><h1>DRAGON ADOPTION AGENCY</h1></Link>

      <div className="navbar-right">

        <div className="search-bar">
          <form>
            <input type="text" name="searchKey" />
            <input type="Submit" value="Search" onChange={(evt) => {
              evt.preventDefault();
            }}/>
          </form>
        </div>

            {
              isLoggedIn
                ? <div>
                  {/* The navbar will show these links after you log in */}
                  <Link to="/home">Home</Link>
                  <a href="#" onClick={handleClick}>Logout</a>
                </div>
                : <div>
                  {/* The navbar will show these links before you log in */}
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
            }

          <div className='navbar-buttons'>
            <Link to="/cart"><button><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/28468-200.png" alt="my image" className='cart-img' onClick={ () => {}} /></button> </Link>
        </div>
      </div>
    </nav>
  )
};



const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    categories: state.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
