import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchproduct } from '../store'


function SingleProduct(props){
  return(
      <div>
          <h1>{props.product.title}</h1> 
          <img src = {props.product.image}/>
          <h3>{props.product.description}</h3>
          {
            props.product.reviews.map(review => {
                return(

            )

        }
    )
          }

         
      </div>
  )
}


const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  const selectedStudent = state.students.find(student => student.id === studentId) 
  return {
      student: selectedStudent,
      campus: state.campuses.find(campus => campus.id === selectedStudent.campusId)
  };
}

export default(connect(mapStateToProps)(Student));