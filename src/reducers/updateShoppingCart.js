const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {cartItems: [], orderTotal: 0}
  }
  //массив корзины
  const {cartItems} = state.shoppingCart;

  //общий массив книг
  const books = state.bookList.books;
  // id искомой книги
  const bookId = action.payload;
  //Получим книгу,подходящую под искомый id
  const book = books.find(item => item.id === bookId);
  //Проверим,что элемент повоторяется
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  //Получим повторяющийся элемент
  const item = cartItems[itemIndex];
  //Конструктор нового элемента корзины

  const updateOrder = (quantity) => {
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

    const updateCartItems = (item, idx) => {
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
      orderTotal: 0,
      cartItems: updateCartItems(newItem, itemIndex)
    };
  }
  switch (action.type) {
    case 'ADDED_ITEM_TO_CART':
      return updateOrder(1)
    case 'ADD_ONE_ITEM_IN_CART':
      return updateOrder(1);
    case 'REMOVE_ITEM_FROM_CART':
      return updateOrder(-1);
    case 'ALL_REMOVE_FROM_CART':
      return updateOrder(-item.count);
    default:
      return state.shoppingCart;

  }
}
export default updateShoppingCart;