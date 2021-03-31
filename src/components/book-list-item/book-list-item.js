import React from 'react';
import './book-list-item.css'

const BookListItem = ({book}) => {
  const {authors, title} = book;
  return (
    <div className='book-list-item'>
      <img className='book-list-item__img' alt=''/>
      <ul className='about'>
        <li className='about__title'>{title}</li>
        <li className='about__authors'>{authors}</li>
      </ul>
    </div>

  )
}

export default BookListItem;