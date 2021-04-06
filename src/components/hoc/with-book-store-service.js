import React  from 'react';
import {BookStoreConsumer} from '../bookStore-context/'

const withBookstoreServiceContext = (Wrapped) => {
  return (props) => {
    return <BookStoreConsumer>
      {(bookStoreService) => {
        return <Wrapped {...props} bookStoreService={bookStoreService}/>
      }
}
    </BookStoreConsumer>
  }
}

export default withBookstoreServiceContext;