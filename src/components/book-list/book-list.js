import React from 'react';
import BookListItem from '../book-list-item';
import PropTypes from 'prop-types'

const BookList = ({books}) => {
  books = [
    {
      id: '1',
      title: 'rtue',
      author: 'James La Brie'
    }, {
      id: '2',
      title: 'one book about propgramming',
      author: 'Frank Sinatra'
    }
  ]
  return (
    <ul>
      {books.map(book => {
        return <li key={book.id}>
          <BookListItem book={book}/>
        </li>
      })
}
    </ul>
  )
}

BookList.propTypes = {
  book: PropTypes.array
}

export default BookList;