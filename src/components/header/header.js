import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = ({items, cost}) => {

  return (
    <Link to='/' className='header'>
      <div className='logo'>
        BookStore
      </div>
      <Link to='/cart' className='cart'>
        <i className="fas fa-shopping-cart"></i>
        <span className='cart__items'>{`${items} items`}</span>
        <span className='cart__cost'>{`($${cost})`}</span>
      </Link>
    </Link>
  )
}

Header.defaultProps = {
  items: 5,
  cost: 200
}

export default Header