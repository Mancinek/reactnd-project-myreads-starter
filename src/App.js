import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'

class BooksApp extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ListBooks}/>
        <Route exact path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
