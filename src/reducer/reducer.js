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
    case 'BOOKS_REQUESTED':
      return {books: [], loading: true, error: null}
    case 'BOOKS_LOADED':
      return {books: action.payload, loading: false, error: null};
    case 'BOOKS_ERROR':
      return {books: [], loading: false, error: action.payload};
    default:
      return state.bookList;
  }
}
const updateShoppingCart = (state, action) => {
  //функция работает с корзиной заказов
  const updateOrder = (id, quantity) => {
    //массив корзины
    const {cartItems} = state.shoppingCart;
    //общий массив книг
    const books = state.bookList.books;
    // id искомой книги
    const bookId = id;
    //Получим книгу,подходящую под искомый id
    const book = books.find(item => item.id === bookId);
    //Проверим,что элемент повоторяется
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    //Получим повторяющийся элемент
    const item = cartItems[itemIndex];
    //Конструктор нового элемента корзины

    const addItem = (book, item = {}) => {
      //в зависимости от quantity добавляет/удаляет счет и тотал элемента
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

      //добавляет новый элемент, если его нет в корзине
      if (idx === -1) {
        return [
          ...cartItems,
          item
        ]
      }
      //при нулевом колличестве удаляет позицию из корзины
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
  switch (action.type) {
    case 'ADDED_ITEM_TO_CART':
      return updateOrder(state, action.payload, 1)
    case 'ADD_ONE_ITEM_IN_CART':
      return updateOrder(state, action.payload, 1);
    case 'REMOVE_ITEM_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_REMOVE_FROM_CART':
      const item = state
        .cartItems
        .find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
      default:
        return state;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
    case 'BOOKS_LOADED':
    case 'BOOKS_ERROR':
      return updateBookList(state, action);
    case 'ADDED_ITEM_TO_CART':
    case 'ADD_ONE_ITEM_IN_CART':
    case 'REMOVE_ITEM_FROM_CART':
    case 'ALL_REMOVE_FROM_CART':
      return updateShoppingCart(state, action);
  }
}

export default reducer;