import React from 'react';
import './book-list-item.css'

const BookListItem = ({book}) => {
  const {authors, title, img} = book;
  return (
    <div className='book-list-item'>
      <img className='book-list-item__img' alt='' src={img}/>
      <ul className='about'>
        <li className='about__title'>
          <button hrefLang='#'>
            {title}
          </button>
        </li>
        <li className='about__authors'>
          <button >{authors}</button>
        </li>
      </ul>
    </div>

  )
}

export default BookListItem;