const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 190
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case 'ADDED_ITEM_TO_CART':
      const bookId=action.payload;
      const book = state.books.find(item=>item.id===bookId)
      const newItem = {
        id: bookId,
        name: book.title,
        count: 1,
        total:book.cost
      }
      return{
        ...state,
        cartItems:[
          ...state.cartItems,
          newItem
        ],
        orderTotal: 190
      }
        default:
      return state;
  }
}

export default reducer;