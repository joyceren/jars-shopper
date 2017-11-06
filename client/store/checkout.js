const ADD_FIRST_NAME = 'ADD_FIRST_NAME';
const ADD_LAST_NAME = 'ADD_LAST_NAME';

const ADD_BILLING_ADD = 'ADD_BILLING_ADD';
const ADD_SHIPPING_ADD = 'ADD_SHIPPING_ADD';

const ADD_BILLING_CITY = 'ADD_BILLING_CITY';
const ADD_SHIPPING_CITY = 'ADD_SHIPPING_CITY';

const ADD_BILLING_ZIP = 'ADD_BILLING_ZIP';
const ADD_SHIPPING_ZIP = 'ADD_SHIPPING_ZIP';

const ADD_CC_NUM = 'ADD_CC_NUM';
const ADD_EXP_MONTH = 'ADD_EXP_MONTH';
const ADD_EXP_YEAR = 'ADD_EXP_YEAR';

// const SUBMIT = 'SUBMIT';

export const getFirstName = firstName => {
  return {type: ADD_FIRST_NAME, firstName}
}

export const getLastName = lastName => {
  return {type: ADD_LAST_NAME, lastName}
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

export const getCCNum = ccNum => {
  return {type: ADD_CC_NUM, ccNum}
}

export const getExpMonth = month => {
  return {type: ADD_EXP_MONTH, month}
}

export const getExpYear = year => {
  return {type: ADD_EXP_YEAR, year}
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
