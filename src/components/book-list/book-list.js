import React, {useEffect} from 'react';
import ErrorBoundry from '../error-boundry'
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import compose from '../../utils'
import {booksLoaded, booksRequested, booksError} from '../../actions/actions'
import {withBookstoreServiceContext} from '../hoc';
import Spinner from '../spinner'
import './book-list.css'

const BookList = ({
  books,
  loading,
  bookstoreService,
  booksLoaded,
  booksRequested,
  booksError
}) => {

  useEffect(() => {
    booksRequested();
    bookstoreService
      .getBooks()
      .then(data => {
        booksLoaded(data)
      })
      .catch(err => console.log(booksError(err)))
    }, [bookstoreService, booksLoaded, booksRequested, booksError]);

  if (loading) {
    return <div>
      <Spinner/>
    </div>
  } else {
    return (
      <ErrorBoundry>
        <ul className='book-list'>
          {books.map(book => {
            return <li key={book.id}>
              <BookListItem book={book}/>
            </li>
          })
}
        </ul>
      </ErrorBoundry>

    )
  }
}

const mapStateToProps = ({books, loading}) => {
  return {books, loading}
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
}

export default compose
(withBookstoreServiceContext,
 connect(mapStateToProps, mapDispatchToProps))
 (BookList)
