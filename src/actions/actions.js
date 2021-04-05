const booksLoaded = (newBook) => {
  return {type: 'BOOKS_LOADED', payload: newBook};
}
const booksRequested=()=>{
  return{type:'BOOKS_REQUESTED'}
}

export {
  booksLoaded,
  booksRequested
}
