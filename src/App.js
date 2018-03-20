import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'

class BooksApp extends Component {
<<<<<<< HEAD
 	render() {
		return (
			<div>
				<Route exact path='/' component={ListBooks}/>
        		<Route exact path='/search' component={SearchBooks}/>
			</div>
		)
	}
=======
  render() {
    return (
      <div>
        <Route exact path='/' component={ListBooks}/>
        <Route exact path='/search' component={SearchBooks}/>
      </div>
    )
  }
>>>>>>> ab0656be107ff9d3d38e63d964f0ad45c6a0b7fb
}

export default BooksApp
