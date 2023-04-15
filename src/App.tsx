import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.css';


import UserPizzaDetailsStore from './Stores';
import PizzaStoreFixture from './Serivce/index.fixture';
import Home from './components/Home';
import PizzStoreAPIApi from './Serivce/index.api';
import AllItems from './components/Home/AllItems';
import CartComponent from './components/CartPage';

function App() {
 const PizzaListStore = new UserPizzaDetailsStore(new PizzStoreAPIApi())
 useEffect(()=>{
  PizzaListStore.getPizzListOverViewAPI()
 },[])
  return (
    <Provider pizzaStore={PizzaListStore}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path='/menu' component={AllItems}></Route>
        <Route exact path='/cart' component={CartComponent}></Route>
      </Switch>

    </BrowserRouter>
    </Provider>
  );
}

export default App;


