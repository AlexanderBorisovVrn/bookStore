import React, {useEffect,useState} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {booksLoaded} from '../../actions/actions'
import {withBookstoreServiceContext} from '../hoc';
import Spinner from '../spinner'
import './book-list.css'

const BookList = ({books, bookstoreService, booksLoaded}) => {
  
  const [state, setState] = useState({loading:true});
  useEffect(() => {
  bookstoreService
    .getBooks()
      .then(data=>{
        setState({loading:false})
        booksLoaded(data)
      })
  }, [bookstoreService, booksLoaded]);
  
  if(state.loading){
    return <div>
      <Spinner/>
    </div>
  }
 else{ return (
        <ul className='book-list'>
      {books.map(book => {
        return <li key={book.id}>
          <BookListItem book={book}/>
        </li>
      })
    }
    </ul>
  )}
}

const mapStateToProps = ({books}) => {
  return {books}
}

const mapDispatchToProps = {
  booksLoaded
}

export default withBookstoreServiceContext(connect(mapStateToProps, mapDispatchToProps)(BookList));