const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 190
}

const getItem =(books,id,cartItems)=>{
  const bookId = id;
  const book = books
    .find(item => item.id === bookId);
  const itemIndex =cartItems
    .findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
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
    case 'ON_INCREASE':
      const increaseId = action.payload;
      //Получим книгу,подходящую под искомый id
      const increase = state
        .books
        .find(item => item.id === increaseId);
      //Проверим,что элемент повоторяется
      const increaseIndex = state
        .cartItems
        .findIndex(({id}) => id === increaseId);
      //Получим повторяющийся элемент
      const increaseItem = state.cartItems[increaseIndex];
      //Конструктор нового элемента корзины
      const increaseItems = (book, increaseItem={}) => {
        const {id=increase.id,title=increase.title,total=0,count=0}=increaseItem;
       
            return {
            id,
            title,
            count:count + 1,
            total:total + Number(book.cost)
         }
      }
      //Обновление корзины
      const increaseCartItem = (cartItems, item, idx) => {
        return [
          ...cartItems.slice(0, idx),
         item,
          ...cartItems.slice(idx + 1)
        ]

      }
      const increaseNewItem = increaseItems(increase,increaseItem);
      return {
        ...state,
        cartItems: increaseCartItem(state.cartItems, increaseNewItem, increaseIndex)
      };
    default:
      return state;
  }
}

export default reducer;