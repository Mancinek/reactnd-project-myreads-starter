import React, { Component } from 'react'
import './App.css'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

const ListBooks = (props) => (
    <div className="app">
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf id={'currentlyReading'} title={'Currently Reading'} booksOnShelf={props.books} onChangeShelf={props.onUpdateBooks}/>
                    <Bookshelf id={'wantToRead'} title={'Want to Read'} booksOnShelf={props.books} onChangeShelf={props.onUpdateBooks}/>
                    <Bookshelf id={'read'} title={'Read'} booksOnShelf={props.books} onChangeShelf={props.onUpdateBooks}/>
                </div>
            </div>

            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
      </div>
  </div>
)

export default ListBooks
