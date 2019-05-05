import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import './style.css';

class Search extends Component {




    render() {
        return (
            <div>
                <Header title={"Google Books Search"}/>
                <h1 className="sub-title">Search & Save Books</h1>
                <SearchBar placeholder={"Search by keywords..."}/>
                <SearchBar placeholder={"Search by author..."}/>
            </div>
        )
    }
}

export default Search;