import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search';
import ProductsList from './components/products/ProductsList/containerProductsList';
import ProductOverlay from './components/products/ProductOveray/containerProductOverlay';
import PayButton from './components/PayButton/PayButton';

class App extends Component {

  state = {
    search: "Search default text"
  }

  componentDidMount() {
    const { getRandomProducts } = this.props;
    getRandomProducts();
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSearchClick = () => {
    console.log(this.state.search);
  }

  render() {
    const { filters } = this.props;

    return (
      <div className="App">
        <Search search={this.state.search} filters={filters} handleSearchChange={this.handleSearchChange} handleSearchClick={this.handleSearchClick} />
        <ProductsList />
        <ProductOverlay />
        <PayButton />
      </div>
    );
  }
}

export default App;

