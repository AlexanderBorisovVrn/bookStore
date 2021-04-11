import React from 'react';
import './shopping-cart.css'
import {connect} from 'react-redux';

const ShoppingCart = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderItems = () => {
    return (items.map((item, idx) => {
      const {id, title, count, total} = item;
      return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>{`$${total}`}</td>
          <td>
            <button type='button' className='inc' onClick={() => onIncrease(id)}>
              <i className="fas fa-plus-circle"></i>
            </button>
            <button type='button' className='dec' onClick={() => onDecrease(id)}>
              <i className="fas fa-minus-circle"></i>
            </button>
            <button type='button' className='remove' onClick={() => onDelete(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      )
    }))
  }

  return (
    <section>
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
          {renderItems()}
        </tbody>
      </table>
      <div className='total-price'>
        <span>Totlal Price</span>
        <span>${total}</span>
      </div>
    </section>

  )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {items: cartItems, total: orderTotal}
}

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`increase ${id}`);

    },
    onDecrease: (id) => {
      console.log(`decrease ${id}`);

    },
    onDelete: (id) => {
      console.log(`delete ${id}`);

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
