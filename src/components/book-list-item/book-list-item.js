import React from 'react';
import './book-list-item.css'

const BookListItem = ({book,addedItemToCart}) => {
  const {authors, title, img, cost} = book;
  const displayAuthors = (authors) => {
    let keyForAuthor = 9000;
    return authors.map(author => {
      ++keyForAuthor;
      return <p key={keyForAuthor}>{author}</p>
    })
  }
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
        <button type='button' className='btn' onClick={addedItemToCart}>Add to cart</button>
      </div>
    </div>
  )
}
export default BookListItem