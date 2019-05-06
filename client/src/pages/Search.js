import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Button from '../components/ButtonTwo';
import './style.css';

class Search extends Component {
    render() {
        return (
            <div>
                <Header title={"Google Books Search"}/>
                <div className="row">
                <h1 className="sub-title">Search & Save Books</h1>
                </div>
                
                <form>
                <div className="row">
                    {/* <div className="medium-8 columns end"> */}
                        <SearchBar placeholder={"Search by keywords..."}/>
                        <SearchBar placeholder={"Search by author..."}/>
                        
                    {/* </div> */}
                    {/* <div className="medium-4 columns"></div> */}
                </div>
                <div className="row">
                    <div className="medium-6 columns"/>
                    <div className="medium-2 columns">
                    <Button label={"Submit"} style={{ right: 0, top: 0 }}/>
                    </div>
                    <div className="medium-6 columns end">
                        
                    </div>
                </div>
                </form>
                <div className="row space"/>
                
                
            </div>
        )
    }
}

export default Search;