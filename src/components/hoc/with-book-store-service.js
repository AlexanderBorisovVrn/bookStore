import React, {useContext} from 'react';
import {BookStoreConsumer} from '../bookStore-context/'

const withBookstoreServiceContext = (Wrapped) => {
  return (props) => {
    return <BookStoreConsumer>
      {(bookstoreServiceContext) => {
        return <Wrapped {...props} bookstoreServiceContext={bookstoreServiceContext}/>
      }
}
    </BookStoreConsumer>
  }
}

export default withBookstoreServiceContext;