import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchProduct } from '../store'

const Category = (props) => {

  return (
    <div>
      <h1>TEST</h1>
      <h2>{props.match.params.name}</h2>
    </div>
  )
}

function mapState(state) {
  return {state}

}

export default connect(mapState)(Category)
