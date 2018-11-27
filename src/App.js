import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/containerHeader';
import HomePage from './components/HomePage';
import Cart from './components/Cart/containerCart';
import Profile from './components/Profile/containerProfile';
import Orders from './components/Orders/containerOrders';
import RegisterForm from './components/RegisterForm/constainerRegisterForm';

class App extends Component {

  componentDidMount() {
    const { getRandomProducts } = this.props;
    getRandomProducts();
  }

  render() {

    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/register" exact component={RegisterForm} />
          </Switch>
        </div>
      </HashRouter>
    );
  };
};

export default App;