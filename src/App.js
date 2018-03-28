import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateBooks = (book, shelf) => {
        console.log(`Rereshing books`)

        BooksAPI.update(book, shelf).then((newListBooks) => {
        	book.shelf = shelf;
            console.log(`Updated BooksAPI for book ${book.title} and shelf ${shelf}`)
            BooksAPI.getAll().then((books) => {
                this.setState({books})
            })            
        })
    }

  	render() {
    	return (
      		<div>
        		<Route exact path='/' render={() => (
        			<ListBooks 
        				books={this.state.books}
        				onUpdateBooks={this.updateBooks}
        			/>
        		)}/>

        		<Route exact path='/search' render={() => (
					<SearchBooks
						books={this.state.books}
						onUpdateBooks={this.updateBooks}
					/>
        		)}/>
      		</div>
    	)
  	}
}

export default BooksApp
