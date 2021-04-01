import React from 'react';
import './book-list-item.css'

const BookListItem = ({book}) => {
  const {authors, title, img, cost} = book;
  const displayAuthors = (authors) => {
    return authors.map(author => {
      return <p>{author}</p>
    })
  }
  console.log(displayAuthors(authors));
  return (
    <div className='book-list-item'>
      <img className='book-list-item__img' alt='' src={img}/>
      <div className='about'>
        <button className='about__title'>
          {title}
        </button>
        <div className='about__authors'>
          {displayAuthors(authors)}
        </div>
        <div className='about__cost'>
          <span>{`$${cost}`}</span>
        </div>
        <button className='btn'>Add to cart</button>
      </div>
    </div>
  )
}
export default BookListItem