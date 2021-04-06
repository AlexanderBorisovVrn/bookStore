import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = ({items, cost}) => {

  return (
    <div  className='header'>
      <Link to='/' className='logo'>
        BookStore
      </Link>
      <Link to='/cart' className='cart'>
        <i className="fas fa-shopping-cart"></i>
        <span className='cart__items'>{`${items} items`}</span>
        <span className='cart__cost'>{`($${cost})`}</span>
      </Link>
    </div>
  )
}

Header.defaultProps = {
  items: 0,
  cost: 0
}

export default Header