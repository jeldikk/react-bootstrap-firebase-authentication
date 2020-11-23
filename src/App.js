import React from 'react'

import logo from './logo.svg';

import {Route, Switch} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import HomePage from "./pages/home-page/home-page.component"
import RegisterPage from "./pages/resiter-page/register-page.component"
import ErrorPage from "./pages/error-page/error-page.component"

import Header from "./components/header/header.component"


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}


export default App;
