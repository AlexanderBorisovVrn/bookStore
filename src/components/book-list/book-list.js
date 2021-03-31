import React, {useEffect} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {booksLoaded} from '../../actions/actions'
import {withBookstoreServiceContext} from '../hoc';
import './book-list.css'

const BookList = ({books, bookstoreService, booksLoaded}) => {

  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data)
  }, [bookstoreService, booksLoaded]);

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

const mapStateToProps = ({books}) => {
  return {books}
}

const mapDispatchToProps = {
  booksLoaded
}

export default withBookstoreServiceContext(connect(mapStateToProps, mapDispatchToProps)(BookList));