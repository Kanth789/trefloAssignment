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
import LoginPageComponent from './components/LoginPage';
import ProctetedRoute from './components/ProtectedRoute';

function App() {
 const PizzaListStore = new UserPizzaDetailsStore(new PizzStoreAPIApi())
 useEffect(()=>{
  PizzaListStore.getPizzListOverViewAPI()
 },[])
  return (
    <Provider pizzaStore={PizzaListStore}>
    <BrowserRouter>
      <Switch>
        <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
        <Route exact path = '/login' component={LoginPageComponent}></Route>
        <ProctetedRoute exact path='/menu' component={AllItems}></ProctetedRoute>
        <ProctetedRoute exact path='/cart' component={CartComponent}></ProctetedRoute>
      </Switch>

    </BrowserRouter>
    </Provider>
  );
}

export default App;


