import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

	state = {
		books: []
	}
	// at the beginning books that are on shelfs, are loaded from the API
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}
	// this method if for updating shelf for books, it needs book object and shelf id
	updateBooks = (book, shelf) => {
		BooksAPI.update(book, shelf).then((newListBooks) => {
			book.shelf = shelf // this part is especially helpful for shelf-controler of Book in SearchBooks to set checkmark on this one shelf-name, that has been currently clicked
			// after shelf update on the server, the books on shelfs are loaded again and set in current state
			BooksAPI.getAll().then((books) => {
				this.setState({books})
			})
		})
	}
	// render method has two components - main List of books/shelfes and Search component. They are placed in Route component to navigate from "/" to "/search" page
	render() {
		return (
			<div>
				<Route exact path="/" render={() => (
					<ListBooks 
						books={this.state.books}
						onUpdateBooks={this.updateBooks}
					/>
				)}/>
				<Route exact path="/search" render={() => (
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