export default class BookStoreService {
  getBooks = () => {
    return [
      {
        id: '1',
        title: 'rtue',
        author: 'James La Brie'
      }, {
        id: '2',
        title: 'one book about propgramming',
        author: 'Frank Sinatra'
      }
    ];
  }
}