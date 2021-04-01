import React from 'react';
import './header.css';

const Header = ({items, cost}) => {

  return (
    <header>
      <div className='logo'>
        BookStore
      </div>
      <div className='cart'>
        <i className="fas fa-shopping-cart"></i>
        <span className='cart__items'>{`${items} items`}</span>
        <span className='cart__cost'>{`($${cost})`}</span>
      </div>
    </header>
  )
}

Header.defaultProps = {
  items: 5,
  cost: 200
}

export default Header