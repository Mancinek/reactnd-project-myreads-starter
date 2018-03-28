# MyReads Project

This is MyReads App. This App is useful for segregating books. The Main Page of the App is divided into three shelves containing books that you:
* are currently reading
* want to read
* have read

Each book has a controller for moving books to the other shelf. You can also add new books to your shelves by using Search Page - just click on the 'plus button' in the bottom-right corner, then enter search phrase and use book-shelf controller to place book on chosen shelf.

## To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important:
The App uses API dedicated for this project, so the available books are limited sample. The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work.