const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 190
}

const getItem = (state, id, act) => {
  const {cartItems} = state;

  const bookId = id;
<<<<<<< HEAD
  const book = books
    .find(item => item.id === bookId);
  const itemIndex =cartItems
    .findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
=======
  //Получим книгу,подходящую под искомый id
  const book = state
    .books
    .find(item => item.id === bookId);
  //Проверим,что элемент повоторяется
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
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
      count: count + 1,
      total: total + Number(book.cost)
    }
  }

  const decreaseItem = (book, item) => {
    const {id, title, count, total} = item;
    return {
      id,
      title,
      count: count - 1,
      total: total - Number(book.cost)
    }
  }

  const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
      return [
        ...cartItems,
        item
      ]
    }
    if (!item||item.count === 0) {
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
  let newItem;
  switch (act) {
    case 'increase':
      newItem = addItem(book, item);
      break;
    case 'decrease':
      newItem = decreaseItem(book, item);
      break;
    case 'delete':
      newItem = null
      break;
    default:
      return;
  }
  return {
    ...state,
    cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
  };

>>>>>>> 0deec0e815777c57bc18a9ae6f65565762610514
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
<<<<<<< HEAD
      const bookId = action.payload;
      //Получим книгу,подходящую под искомый id
      const book = state
        .books
        .find(item => item.id === bookId);
      //Проверим,что элемент повоторяется
      const itemIndex = state
        .cartItems
        .findIndex(({id}) => id === bookId);
      //Получим повторяющийся элемент
      const item = state.cartItems[itemIndex];
      //Конструктор нового элемента корзины
      const updateItem = (book, item={}) => {
        const {id=book.id,title=book.title,total=0,count=0}=item;
       
            return {
            id,
            title,
            count:count + 1,
            total:total + Number(book.cost)
         }
      }
      const updateCartItems = (cartItems, item, idx) => {
        if (idx === -1) {
          return [
            ...cartItems,
            item
          ]
        }
        return [
          ...cartItems.slice(0, idx),
         item,
          ...cartItems.slice(idx + 1)
        ]

      }
      const newItem = updateItem(book,item);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };
=======
      return getItem(state, action.payload, 'increase')
>>>>>>> 0deec0e815777c57bc18a9ae6f65565762610514
    case 'ON_INCREASE':
      return getItem(state, action.payload, 'increase');
    case 'ON_DECREASE':
      return getItem(state, action.payload, 'decrease');
    case 'ON_REMOVE':
      return getItem(state, action.payload, 'delete');
    default:
      return state;
  }
}

export default reducer;