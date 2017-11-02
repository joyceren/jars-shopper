import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from './Navbar.js'


const Home = () => {
    return(
      <Link to='/products'>
        <div>
          <h2>Click to see all our dragons!</h2>
          <img src='https://media1.popsugar-assets.com/files/thumbor/e7akbu-i0HyvtEF_3Cc_iTZl8Vw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/07/819/n/41306527/tmp_w2PrdV_5c88443657b0b49a_Screen_Shot_2017-08-07_at_11.22.29_AM.png' className='home-img'/>
        </div>
      </Link>
    )
}

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

export default withRouter(connect(mapState, mapDispatch)(Home))
