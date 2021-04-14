const initialState = {
  bookList: {
    books: [],
    loading: true,
    error: null
  },
  shoppingCart: {
    cartItems: [],
    orderTotal: 190
  }
}

const updateBookList = (state, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: true,
        error: null
      };
    case 'BOOKS_REQUESTED':
       return {
         books:[],
         loading:true,
         error:false
       } 

  }
}
const updateOrder = (state, id, quantity) => {
  const {
    cartItems,
    books
  } = state;
  const bookId = id;
  //Получим книгу,подходящую под искомый id
  const book = books.find(item => item.id === bookId);
  //Проверим,что элемент повоторяется
  const itemIndex = cartItems.findIndex(({
    id
  }) => id === bookId);
  //Получим повторяющийся элемент
  const item = cartItems[itemIndex];
  //Конструктор нового элемента корзины

  const addItem = (book, item = {}) => {
    const {
      id = book.id,
        title = book.title,
        total = 0,
        count = 0
    } = item;
    return {
      id,
      title,
      count: count + quantity,
      total: total + Number(book.cost) * quantity
    }
  }

  const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
      return [
        ...cartItems,
        item
      ]
    }
    if (item.count === 0) {
      return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
      ]
    }
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ]
  }
  const newItem = addItem(book, item);
  return {
    ...state,
    cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
  };
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
        return updateOrder(state, action.payload, 1);
      case 'INCREASE_ITEM_IN_CART':
        return updateOrder(state, action.payload, 1);
      case 'DECREASE_ITEM_IN_CART':
        return updateOrder(state, action.payload, -1);
      case 'REMOVE_ITEM_FROM_CART':
        const item = state
          .cartItems
          .find(({
            id
          }) => id === action.payload);
        return updateOrder(state, action.payload, -item.count);
      default:
        return state;
  }
}

export default reducer;