import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <Bookshelf id={'currentlyReading'} title={'Currently Reading'} booksOnShelf={this.state.books}/>
              <Bookshelf id={'wantToRead'} title={'Want to Read'} booksOnShelf={this.state.books}/>
              <Bookshelf id={'read'} title={'Read'} booksOnShelf={this.state.books}/>

              </div>
            </div>

            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default ListBooks
>>>>>>> ab0656be107ff9d3d38e63d964f0ad45c6a0b7fb
