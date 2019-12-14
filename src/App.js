import React, {useEffect, useState} from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';

import Header from "./components/Header";
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

const firebaseConfig = {
  apiKey: "AIzaSyD7HPsooaY1uaeWC1FrlDq57MxobBFIrQY",
  authDomain: "dynamic-web-exercise-five.firebaseapp.com",
  databaseURL: "https://dynamic-web-exercise-five.firebaseio.com",
  projectId: "dynamic-web-exercise-five",
  storageBucket: "dynamic-web-exercise-five.appspot.com",
  messagingSenderId: "1096743521473",
  appId: "1:1096743521473:web:44c2c282b503095f889840"
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // initialize firebase
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error) {
        console.log('error', error);
      });
  }, [firebaseConfig])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        setLoggedIn(true);
        setUser(user);
      } else{
        setLoggedIn(false);
        setUser({});
      }
    });
  }, [])

  function signupFunction(e) {
    e.preventDefault();

    // let email = "pbd244@nyu.edu";
    // let password = "1234abcde";

    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      })
  }

  function loginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      })
  }

  function logoutFunction() {
    
    firebase.auth().signOut().then(function() {
      // sign out successful.
      setLoggedIn(false);
    })
    .catch(function(error) {
      console.log('error', error);
    })
  }

  return (
    <div className="App">
        <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
        <Router>
          <Route exact path="/">
           { loggedIn ? <UserProfile user={user} /> : <Redirect to="/login" /> }
          </Route>
          <Route exact path="/signup">
           { loggedIn ? <Redirect to="/" /> : <Signup signupFunction={signupFunction}/>}
          </Route>
          <Route exact path="/login">
           { loggedIn ? <Redirect to="/" /> : <Login loginFunction={loginFunction}/>}
          </Route>
        </Router>
    </div>
  );
}

export default App;

// <Route exact path='/' component={UserProfile} />
// <Route exact path='/login' component={Login} />
// <Route path='/sign-up' component={Signup} />
// <Route path='/log-out' component={Logout} />
