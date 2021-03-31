import React from 'react';
import BookList from '../../book-list/book-list';
import './home-page.css';

const HomePage = ()=>{
  return (
    <section className='home-page'>
      <BookList/>
    </section>
  )
}

export default HomePage;