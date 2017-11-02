import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import store from '../store'

const Sidebar = (props) =>  {

    return (
      <sidebar>
        {props.categories.map((cat)=> {
          return (
            <div key= {cat.id} >
              <Link to={`/categories/${cat.name}`}>
                <h2>{cat.name}</h2>
              </Link>
            </div>
          )
      })}
      </sidebar>
    )

}

function mapState(state) {
  return {categories: state.categories}

}

export default withRouter(connect(mapState)(Sidebar))
