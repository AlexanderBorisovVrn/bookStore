import React, {useEffect} from 'react';

import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import compose from '../../utils';
import ErrorIndicator from '../error-indicator';
import {fetchBooks,addedItemToCart} from '../../actions/actions'
import {withBookstoreServiceContext} from '../hoc';
import Spinner from '../spinner'
import './book-list.css'

const BookList = ({books,addedItemToCart}) => {
  return (
    <ul className='book-list'>
      {books.map(book => {
        const {id}=book;
             return <li key={id}>
          <BookListItem book={book} addedItemToCart={()=>addedItemToCart(id)} />
        </li>
      })
}
    </ul>
  )
}

const BookListContainer = ({books, loading, error, fetchBooks,addedItemToCart}) => {

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const spinner = <div>
    <Spinner/>
  </div>

  if (error) {
    return <ErrorIndicator/>
  }
  if (!loading) {
    return <BookList books={books} addedItemToCart={addedItemToCart} />
  } else {
    return spinner
  }

}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
}

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookStoreService),
    addedItemToCart:(id)=>dispatch(addedItemToCart(id))
  }
}

export default compose(withBookstoreServiceContext,
   connect(mapStateToProps, mapDispatchToProps),)
   (BookListContainer)
