import React, { Component } from 'react'
import './App.css'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

// stateless!!!!!!!!!!!!!!
class ListBooks extends Component {

    render() {
        const {books, onUpdateBooks} = this.props; // decomposition
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Bookshelf id={'currentlyReading'} title={'Currently Reading'} booksOnShelf={books} onChangeShelf={onUpdateBooks}/>
                            <Bookshelf id={'wantToRead'} title={'Want to Read'} booksOnShelf={books} onChangeShelf={onUpdateBooks}/>
                            <Bookshelf id={'read'} title={'Read'} booksOnShelf={books} onChangeShelf={onUpdateBooks}/>
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
