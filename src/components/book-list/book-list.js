import React, {useEffect} from 'react';
import BookListItem from '../book-list-item';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {withBookstoreServiceContext} from '../hoc';

const BookList = ({books, bookstoreService}) => {
  useEffect(() => {
    console.log(bookstoreService.getBooks());
  }, [bookstoreService]);
  
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

const mapStateToProps = ({books}) => {
  return {books}
}

BookList.propTypes = {
  book: PropTypes.array
}

export default withBookstoreServiceContext(connect(mapStateToProps)(BookList));