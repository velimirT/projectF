import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search';
// import Button from './components/button/containerButton';
import PayButton from './components/PayButton/PayButton';

class App extends Component {
  
  state = {
    search:"Search default text",
    filters: ['materials', 'technique', 'size','color']
  }

  handleSearchChange = (e) => {
    this.setState({search:e.target.value});
  }

  handleSearchClick = () => {
    console.log(this.state.search);
    // alert(this.state.search);
  }

  render() {
    return (
      <div className="App">
        <Search search = {this.state.search} filters = {this.state.filters} handleSearchChange = {this.handleSearchChange} handleSearchClick = {this.handleSearchClick} />
        <PayButton/>
      </div>
    );
  }
}

export default App;
