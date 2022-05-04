import React, {Component} from 'react';
import SearchBar from './SearchBar';
import request from 'superagent';
import '../Library.css'
import BooksList from './BooksList';

class Books extends Component {
  constructor(props){
      super(props);
      this.state = {
          books: [],
          searchField: ''
      }
  }

  searchBook = (e) => {
    e.preventDefault();
    try{
      request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({q: this.state.searchField})
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items]})
      })
    } catch (error){
      console.error(error);
    }
  }

  handleSearch = (e) => {
    this.setState({searchField:e.target.value });
    console.log(e.target.value);
  }

  render(){
    return (
      <div className="libbody">
        <div className='searchBar'>
            <SearchBar searchBook ={this.searchBook} handleSearch = {this.handleSearch}/>
            <BooksList books={this.state.books}/>
        </div>   
      </div>
          
    );
  }
}



export default Books