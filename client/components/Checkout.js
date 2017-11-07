import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  checkout,
  getFullName,
  getBillingAdd,
  getBillingCity,
  getBillingState,
  getBillingZip,
  getShippingAdd,
  getShippingCity,
  getShippingState,
  getShippingZip,
  getCCNum,
  getExpMonth,
  getExpYear

 } from '../store'

const Checkout = (props) => {

  const { checkout, cart } = props;
    const {
      handleFullName,
      handleShippingAddress,
      handleBillingAddress,
      handleShippingCity,
      handleBillingCity,
      handleShippingState,
      handleBillingState,
      handleShippingZip,
      handleBillingZip,
      handleCCNum,
      handleExpMonth,
      handleExpYear,
      handleSubmit
  } = props;

    return (
      <div>
        <h1>Checkout</h1>
        <h4>Billing Information</h4>
        <form onSubmit = {(evt) => handleSubmit(checkout, cart, evt)}>
          <label> Name
            <input type='text' value={checkout.name} onChange= {handleFullName}/>

            </label>

            <label> Address
            <input type='text' value={checkout.billingAddress} onChange= {handleBillingAddress}/>
              </label>

              <label> City
            <input type='text' value={checkout.billingCity} onChange= {handleBillingCity}/>
              </label>

              <label> State
            <input type='text' value={checkout.billingState} onChange= {handleBillingState}/>
              </label>

              <label> Zipcode
            <input type='text' value={checkout.billingZip} onChange= {handleBillingZip}/>
              </label>

          </form>

        <h4>Shipping Information</h4>

        <form>
          <label> Name
            <input type='text' value={checkout.fullName} onChange= {handleFullName}/>
            </label>

            <label> Address
            <input type='text' value={checkout.shippingAddress} onChange= {handleShippingAddress}/>
              </label>

              <label> City
            <input type='text' value={checkout.shippingCity} onChange= {handleShippingCity}/>
              </label>

              <label> State
            <input type='text' value={checkout.shippingState} onChange= {handleShippingState}/>
              </label>

              <label> Zipcode
            <input type='text' value={checkout.shippingZip} onChange= {handleShippingZip}/>
              </label>

          </form>



        <h4> Payment Information </h4>
        <form>
          <label> Credit Card Number
            <input type='text' value={checkout.ccNum} onChange={handleCCNum}/>
            </label>
            </form>
            <label> Expiration Month
            <select onChange= {handleExpMonth}>
            <option value ="">Month</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            </select>

            </label>
            <label> Expiration Year
            <select onChange= {handleExpYear}>
            <option value ="">Year</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            </select>

            </label>



          <div>
            <Link to='/review'><button type="submit"> Submit</button></Link>
            </div>
        </div>


    )
  }


const mapStateToProps = function (state) {
  return {
    checkout: state.checkout,
    cart: state.cart
  }
}
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
      handleFullName: evt => {
          dispatch(getFullName(evt.target.value));
      },
      handleBillingAddress: evt => {
          dispatch(getBillingAdd(evt.target.value));
      },
      handleBillingCity: evt => {
          dispatch(getBillingCity(evt.target.value));
      },
      handleBillingState: evt => {
          dispatch(getBillingState(evt.target.value));
      },
      handleBillingZip: evt => {
          dispatch(getBillingZip(evt.target.value));
      },
      handleCCNum: evt => {
          dispatch(getCCNum(evt.target.value));
      },
      handleExpMonth: evt => {
          dispatch(getExpMonth(evt.target.value))
      },
      handleExpYear: evt => {
          dispatch(getExpYear(evt.target.value))
      },
      handleShippingAddress: evt => {
          dispatch(getShippingAdd(evt.target.value));
      },
      handleShippingCity: evt => {
          dispatch(getShippingCity(evt.target.value));
      },
      handleShippingState: evt => {
          dispatch(getShippingState(evt.target.value));
      },
      handleShippingZip: evt => {
          dispatch(getShippingZip(evt.target.value));
      },
      handleSubmit: (customerInfo, productInfo, evt) => {
        evt.preventDefault();
        dispatch(onSubmissionThunk(customerInfo, productInfo))
      }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));

