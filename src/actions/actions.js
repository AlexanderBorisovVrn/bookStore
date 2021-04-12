const booksLoaded = (newBook) => {
  return {type: 'BOOKS_LOADED', payload: newBook};
}
const booksRequested=()=>{
  return{type:'BOOKS_REQUESTED'}
}
const booksError=(err)=>{
  return {type:'BOOKS_ERROR',payload:err}
}

const addedItemToCart = (bookId)=>{
  return {type:'ADDED_ITEM_TO_CART',payload:bookId}
}

const onIncrease = (increaseId)=>{
  return {type:'ON_INCREASE',payload:increaseId}
}
const onDecrease = (decreaseId)=>{
  return {type:'ON_DECREASE',payload:decreaseId}
}

const onRemove = (removeId)=>{
  return {type:'ON_REMOVE',payload:removeId}
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
  fetchBooks,
  addedItemToCart,
  onIncrease,
  onDecrease,
  onRemove
}
