import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf'; 
import data from './data.js'



class App extends Component{
  constructor(){
    super()
      this.state = {
      books: data
    }

  }

  render(){
    return(
      <p>
        <Header/>
        <BookList books= {this.state.books}/>
        <Shelf/>
      </p>
    
    )}
};


export default App;
