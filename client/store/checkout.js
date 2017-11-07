

const ADD_FULL_NAME = 'ADD_FULL_NAME';

const ADD_BILLING_ADD = 'ADD_BILLING_ADD';
const ADD_SHIPPING_ADD = 'ADD_SHIPPING_ADD';

const ADD_BILLING_CITY = 'ADD_BILLING_CITY';
const ADD_SHIPPING_CITY = 'ADD_SHIPPING_CITY';

const ADD_BILLING_ZIP = 'ADD_BILLING_ZIP';
const ADD_SHIPPING_ZIP = 'ADD_SHIPPING_ZIP';

const ADD_BILLING_STATE = 'ADD_BILLING_STATE'
const ADD_SHIPPING_STATE= 'ADD_SHIPPING_STATE'

const ADD_CC_NUM = 'ADD_CC_NUM';
const ADD_EXP_MONTH = 'ADD_EXP_MONTH';
const ADD_EXP_YEAR = 'ADD_EXP_YEAR';

// const SUBMIT = 'SUBMIT';

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

export const getShippingState = shippingstate => {
  return {type: ADD_SHIPPING_STATE, shippingstate}
}

export const getBillingState = billingstate => {
  return {type: ADD_BILLING_STATE, billingstate}
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

export default function checkoutReducer(state={},action) {
  switch(action.type){
    case  ADD_FULL_NAME:
      return action.full.Name;
    case ADD_BILLING_ADD: 
      return action.billingAddress;
    case ADD_SHIPPING_ADD:
      return action.shippingAddress;
    case ADD_BILLING_CITY: 
      return action.billingCity;
    case ADD_SHIPPING_CITY:
      return action.shippingCity;
    case ADD_BILLING_ZIP:
      return action.billingZip;
    case ADD_SHIPPING_ZIP: 
      return action.shippingZip;
    case ADD_BILLING_STATE:
      return action.billingstate;
    case ADD_SHIPPING_STATE:
      return action.shippingstate;
    case ADD_CC_NUM:
      return action.ccNum;
    case ADD_EXP_MONTH:
      return action.month;
    case ADD_EXP_YEAR:
      return action.year;
    default:
      return state;

  }

}

// export const submit = () => {
//   return { type: SUBMIT };
// }

// //be sure to add user info and order info as well
// export function onSubmissionThunk(customerInfo) {
//   return function thunk(dispatch) {
//       return axios.post('/api/orders', { customerInfo })
//           .then(res => res.data)
//           .then(result => {
//               dispatch(submit());
//           })
//           .catch(err => console.log(err));
//   };
// }
