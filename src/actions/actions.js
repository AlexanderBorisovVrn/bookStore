const booksLoaded = (newBook) => {
  return {type: 'BOOKS_LOADED', payload: newBook};
}
const booksRequested=()=>{
  return{type:'BOOKS_REQUESTED'}
}
const booksError=(err)=>{
  return {type:'BOOKS_ERROR',payload:err}
}

const fetchBooks = (dispatch,bookStoreService) =>{
  return ()=>{
   dispatch(booksRequested())
    bookStoreService
      .getBooks()
      .then(data => dispatch(booksLoaded(data)))
      .catch(err => booksError(err))
  }
}


export {
  fetchBooks
}
