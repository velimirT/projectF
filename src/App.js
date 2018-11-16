import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/containerSearch';
import ProductsList from './components/products/ProductsList/containerProductsList';
import ProductOverlay from './components/products/ProductOveray/containerProductOverlay';

class App extends Component {

  componentDidMount() {
    const { getRandomProducts } = this.props;
    getRandomProducts();
  }

  render() {
  
    return (
      <div>
        <Search />
        <ProductsList />
        <ProductOverlay />
      </div>
    );
  };
};

export default App;