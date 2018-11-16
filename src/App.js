import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/containerSearch';
import ProductsList from './components/products/ProductsList/containerProductsList';
import ProductOverlay from './components/products/ProductOveray/containerProductOverlay';
import Header from './components/Header/Header';

class App extends Component {

  componentDidMount() {
    const { getRandomProducts } = this.props;
    getRandomProducts();
  }

  render() {
  
    return (
      <div>
        <Header />
        <Search />
        <ProductsList />
        <ProductOverlay />
      </div>
    );
  };
};

export default App;