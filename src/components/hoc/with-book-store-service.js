import React  from 'react';
import {BookStoreConsumer} from '../bookStore-context/'

const withBookstoreServiceContext = (Wrapped) => {
  return (props) => {
    return <BookStoreConsumer>
      {(bookstoreService) => {
        return <Wrapped {...props} bookstoreService={bookstoreService}/>
      }
}
    </BookStoreConsumer>
  }
}

export default withBookstoreServiceContext;