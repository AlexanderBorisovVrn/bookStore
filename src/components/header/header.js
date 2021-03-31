import React from 'react';
import './header.css';

const Header = ({items,cost}) => {
  
  return (
    <header>
      <div className='logo'>
        BookStore
      </div>
      <div className='cart'>
  <span>{`${items} items`}</span>
  <span>{`($${cost})`}</span>
      </div>
    </header>
  )
}

Header.defaultProps={
  items:5,
  cost:200
}

export default Header