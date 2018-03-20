import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class ShelfChanger extends Component {
	
	// set initial state
/*	componentDidMount() {
		BooksAPI.get(this.props.id).then((book) => {
			this.setState({bookShelf: book.shelf})
		})
 	}*/

	changeShelf = (shelfId) => {
		BooksAPI.update(this.props.id, shelfId).then((response) => {
			console.log(`Status of shelf change: ${response}`);
		})
	}

	render() {
		return (
			<div className="book-shelf-changer">
				<select value={this.props.shelf}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger