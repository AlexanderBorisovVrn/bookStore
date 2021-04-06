import React from 'react';
import './shopping-cart.css'

const ShoppingCart = () => {
  return (
    <table>
      <caption>Your order</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Alphabet</td>
          <td>2</td>
          <td>$40</td>
          <td>
            <button type='button' className='inc'>
              <i className="fas fa-plus-circle"></i>
            </button>
            <button type='button' className='dec'>
              <i className="fas fa-minus-circle"></i>
            </button>
            <button type='button' className='remove'>
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ShoppingCart;