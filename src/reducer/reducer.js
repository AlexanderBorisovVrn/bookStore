const initialState = {
  books:[    {
    id: '1',
    title: 'rtue',
    author: 'James La Brie'
  }, {
    id: '2',
    title: 'one book about propgramming',
    author: 'Frank Sinatra'
  }]
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books:action.payload
      };
    default:
      return state;
  }
}

export default reducer;