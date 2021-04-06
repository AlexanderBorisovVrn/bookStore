const booksLoaded = (newBook) => {
  return {type: 'BOOKS_LOADED', payload: newBook};
}
const booksRequested=()=>{
  return{type:'BOOKS_REQUESTED'}
}
const booksError=(payload)=>{
  return {type:'BOOKS_ERROR'}
}

export {
  booksLoaded,
  booksRequested,
  booksError
}
