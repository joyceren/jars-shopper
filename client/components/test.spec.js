import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SingleProduct } from './SingleProduct'
import sinon from 'sinon';
import {getProduct} from '../store'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleProduct', () => {
  let singleProduct;

  beforeEach(() => {
    singleProduct = shallow(<SingleProduct getProduct={getProduct} match={{params: {id:2}}} product={{
      id:2, title: "Happy Dragon",
      description: "Testing is the last thing",
      price: 4000,
      quantity: 9000,
      image: "http://images2.fanpop.com/images/photos/4800000/fantasy-dragon-dragons-4814395-1200-911.jpg"}}
    />)
  })

  it('renders the title', () => {
    expect(singleProduct.find('h1').text()).to.be.equal('Happy Dragon  $4000')
  })

  it('renders the quantity', () => {
    expect(singleProduct.find('h3').text()).to.be.equal('Inventory: 9000')
  })

  describe('addToCartHandler', () => {
    it("gets called once with the right quantity", () => {
      const id = 2;
      const quantity = 2;
      singleProduct.instance().addToCartHandler(id, quantity);
      sinon.spy(addToCart);
      expect(addToCart.calledOnce).to.equal(true);
      expect(addToCart.calledWith(quantity)).to.equal(true);
    })
  })
})
