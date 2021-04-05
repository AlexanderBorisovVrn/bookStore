import React, {useEffect, useState} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import compose from '../../utils'
import {booksLoaded, booksRequested} from '../../actions/actions'
import {withBookstoreServiceContext} from '../hoc';
import Spinner from '../spinner'
import './book-list.css'

const BookList = ({books, loading, bookstoreService, booksLoaded, booksRequested}) => {

  useEffect(() => {
    booksRequested();
    bookstoreService
      .getBooks()
      .then(data => {
        booksLoaded(data)
      })
  }, [bookstoreService, booksLoaded]);

  if (loading) {
    return <div>
      <Spinner/>
    </div>
  } else {
    return (
      <ul className='book-list'>
        {books.map(book => {
          return <li key={book.id}>
            <BookListItem book={book}/>
          </li>
        })
}
      </ul>
    )
  }
}

const mapStateToProps = ({books, loading}) => {
  return {books, loading}
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
}

export default compose(
  withBookstoreServiceContext,
   connect(mapStateToProps, mapDispatchToProps),)
   (BookList)