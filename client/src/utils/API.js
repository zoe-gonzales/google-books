const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

export default {
    searchbyKeywords: function(keywords) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}&key=${process.env.BOOKS_KEY}`);
    },
    searchbyKeywordsAndAuthor: function(keywords, author) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}+inauthor:${author}&key=${process.env.BOOKS_KEY}`);
    }
}