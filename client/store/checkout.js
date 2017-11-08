
import axios from 'axios';

const ADD_FULL_NAME = 'ADD_FULL_NAME';

const ADD_BILLING_ADD = 'ADD_BILLING_ADD';
const ADD_SHIPPING_ADD = 'ADD_SHIPPING_ADD';

const ADD_BILLING_CITY = 'ADD_BILLING_CITY';
const ADD_SHIPPING_CITY = 'ADD_SHIPPING_CITY';

const ADD_BILLING_ZIP = 'ADD_BILLING_ZIP';
const ADD_SHIPPING_ZIP = 'ADD_SHIPPING_ZIP';

const ADD_BILLING_STATE = 'ADD_BILLING_STATE'
const ADD_SHIPPING_STATE = 'ADD_SHIPPING_STATE'

const ADD_CC_NUM = 'ADD_CC_NUM';
const ADD_EXP_MONTH = 'ADD_EXP_MONTH';
const ADD_EXP_YEAR = 'ADD_EXP_YEAR';

const SUBMIT = 'SUBMIT'


export const getFullName = fullName => {
  return {type: ADD_FULL_NAME, fullName}
}

export const getBillingAdd = billingAddress => {
  return {type: ADD_BILLING_ADD, billingAddress}
}

export const getShippingAdd = shippingAddress => {
  return {type: ADD_SHIPPING_ADD, shippingAddress}
}

export const getBillingCity = billingCity => {
  return {type: ADD_BILLING_CITY, billingCity}
}

export const getShippingCity = shippingCity => {
  return {type: ADD_SHIPPING_CITY, shippingCity}
}

export const getBillingZip = billingZip => {
  return {type: ADD_BILLING_ZIP, billingZip}
}

export const getShippingZip = shippingZip => {
  return {type: ADD_SHIPPING_ZIP, shippingZip}
}

export const getShippingState = shippingState => {
  return {type: ADD_SHIPPING_STATE, shippingState}
}

export const getBillingState = billingState => {
  return {type: ADD_BILLING_STATE, billingState}
}

export const getCCNum = ccNum => {
  return {type: ADD_CC_NUM, ccNum}
}

export const getExpMonth = month => {
  return {type: ADD_EXP_MONTH, month}
}

export const getExpYear = year => {
  return {type: ADD_EXP_YEAR, year}
}

export const submit = () => {
  return {type: SUBMIT}
}


const initialState = {
  fullName: '',
  billingAddress: '',
  shippingAddress: '',
  billingCity: '',
  shippingCity: '',
  billingZip: '',
  shippingZip: '',
  billingState: '',
  shippingState: '',
  ccNum: '',
  month: '',
  year: '',

}

export default function checkoutReducer(state=initialState, action) {
  switch(action.type){
    case  ADD_FULL_NAME:
      return Object.assign({}, state, {fullName: action.fullName});
    case ADD_BILLING_ADD:
      return Object.assign({}, state, {billingAddress: action.billingAddress});
    case ADD_SHIPPING_ADD:
      return Object.assign({}, state, {shippingAddress: action.shippingAddress});
    case ADD_BILLING_CITY:
      return Object.assign({}, state, {billingCity: action.billingCity});
    case ADD_SHIPPING_CITY:
      return Object.assign({}, state, {shippingCity: action.shippingCity});
    case ADD_BILLING_ZIP:
      return Object.assign({}, state, {billingZip: action.billingZip});
    case ADD_SHIPPING_ZIP:
      return Object.assign({}, state, {shippingZip: action.shippingZip});
    case ADD_BILLING_STATE:
      return Object.assign({}, state, {billingState: action.billingState});
    case ADD_SHIPPING_STATE:
      return Object.assign({}, state, {shippingState: action.shippingState});
    case ADD_CC_NUM:
      return Object.assign({}, state, {ccNum: action.ccNum});
    case ADD_EXP_MONTH:
      return Object.assign({}, state, {month: action.month});
    case ADD_EXP_YEAR:
      return Object.assign({}, state, {year: action.year});
    case SUBMIT:
      return Object.assign({}, state);
    default:
      return state;

  }

}

export function onSubmissionThunk(customerInfo) {
  return function thunk(dispatch) {
      return axios.put('/api/cart', { customerInfo })
          .then(res => res.data)
          .then(result => {
            console.log('Result of submission thunk')
            console.log(result);
              dispatch(submit());
          })
          .catch(err => console.log(err));
  };
}
