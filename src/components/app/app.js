import React from 'react';
import ErrorIndicator from '../error-indicator/';
import {BookStoreProvider} from '../bookStore-context/'

const App = () => {
   return (
    <BookStoreProvider value='71'>
      <div className='app'>
        <ErrorIndicator/>
      </div>
    </BookStoreProvider>
  )
  
}

export default App