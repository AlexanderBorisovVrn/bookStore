const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'Book 1',
      count: 3,
      total: 150
    }, {
      id: 2,
      name: 'Book 2',
      count: 1,
      total: 40
    }
  ],
  orderTotal: 190
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {...state,books: [], loading: true, error: null}
    case 'BOOKS_LOADED':
      return {...state,books: action.payload, loading: false, error: null};
    case 'BOOKS_ERROR':

      return {...state,books: [], loading: false, error: action.payload}
    default:
      return state;
  }
}

export default reducer;