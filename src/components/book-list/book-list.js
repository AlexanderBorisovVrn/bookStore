import React, {useEffect} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import compose from '../../utils';
import ErrorIndicator from '../error-indicator';
import {booksLoaded, booksRequested, booksError} from '../../actions/actions'
import {withBookstoreServiceContext} from '../hoc';
import Spinner from '../spinner'
import './book-list.css'

const BookList = ({books, loading, error, fetchBooks}) => {

  useEffect(() => {
    fetchBooks();
  },[fetchBooks]);

  const bookList = <ul className='book-list'>
    {books.map(book => {
      return <li key={book.id}>
        <BookListItem book={book}/>
      </li>
    })
}
  </ul>;
  const spinner = <div>
    <Spinner/>
  </div>

  if (error) {
    return <ErrorIndicator/>
  }
  if (!loading) {
    return bookList
  } else {
    return spinner
  }

}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: () => {
      const {bookStoreService} = ownProps;
      dispatch(booksRequested())
      bookStoreService
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => booksError(err))
    }
  }
}

export default compose(withBookstoreServiceContext, connect(mapStateToProps, mapDispatchToProps),)(BookList)