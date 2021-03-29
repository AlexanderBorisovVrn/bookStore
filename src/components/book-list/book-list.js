import React from 'react';

const BookList = ({books}) => {
  books = [
    {
      id: '1',
      name: 'rtue'
    }, {
      id:'2',
      name:'trert'
    }
  ]
  return (
    <ul>
      {books.map(book =><li key='id'>{book.name}</li>)}
    </ul>
  )
}

export default BookList;