# Google Books Search

Google Books search is a full stack (MERN) app that enables users to search for volumes from [Google Books](https://www.google.com/intl/en/googlebooks/about/index.html) and save the results to view at a later time.

# Tools used
* MongoDB
* Mongoose
* React
* Express
* Google Books API
* Foundation via [foundation-sites](https://www.npmjs.com/package/foundation-sites) and [react-foundation](https://www.npmjs.com/package/react-foundation) npm packages
* Socket.io

# How to use

Users of the app can search for books by keyword(s) with an option to filter their search by author name. 

Once books are rendered to the page, clicking the *Save* button will add them to the Favorites page, notifying the user.

On the Favorites page, clicking *Remove* for a book will remove it from this page as well as the Mongo database.


<img src="./images/books.gif" alt="books gif"/>


# Deployment

Deployed at https://gbookssearch.herokuapp.com