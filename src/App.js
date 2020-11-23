import React from 'react'

import logo from './logo.svg';

import {Route, Switch, Redirect} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import HomePage from "./pages/home-page/home-page.component"
import RegisterPage from "./pages/resiter-page/register-page.component"
import ErrorPage from "./pages/error-page/error-page.component"

import Header from "./components/header/header.component"

import {auth, createUserDocument} from "./firebase/firebase.util"
import SignUp from './components/sign-up/sign-up.component';


class App extends React.Component {

  constructor(props){
    super(props);

    this.unsubscribeSession = null;

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    console.log("App component mounted")

    this.unsubscribeSession = auth.onAuthStateChanged(async (userAuth) => {
      console.log("onAuthStateChanged event called");
      // console.log(user.displayName);
      console.log(userAuth);
      if(userAuth){

        const userRef = await createUserDocument(userAuth)
        this.setState({currentUser: userAuth})

        userRef.onSnapshot((snapshot)=>{
            this.setState({
              currentUser:{
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          })
      }

      this.setState({currentUser: userAuth});

    })
  }

  componentWillUnmount(){

    if(this.unsubscribeSession){
      this.unsubscribeSession();
    }
    
    
  }

  render() {
    console.log("app render", this.state.currentUser);
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" render={() => this.state.currentUser ? (<Redirect to="/" />): (<RegisterPage />) } />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}


export default App;
