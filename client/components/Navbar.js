import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {logout} from '../store';

const Navbar = (props) => {
  const {handleClick, isLoggedIn} = props


  return (
    <nav className="navbar">
      <Link to="/"> <h1>Dragon Adoption Agency </h1> </Link>
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
          <Link to="/cart"><button><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/28468-200.png" alt="my image" onClick={ () => console.log('CLICKED')} /></button> </Link>
      </div>
    </nav>
  )
};



const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
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
