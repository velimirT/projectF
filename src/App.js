import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage';
import Cart from './components/Cart/containerCart';

class App extends Component {

  componentDidMount() {
    const { getRandomProducts } = this.props;
    getRandomProducts();
  }

  render() {
  
    return (
      <div>
        <Header />
        <HashRouter>
            <Switch>
              <Route path = "/" exact component = {HomePage}/>
              <Route path = "/cart" exact component = {Cart}/>
            </Switch>
         </HashRouter>
      </div>
    );
  };
};

export default App;