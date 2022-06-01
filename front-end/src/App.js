import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import MakePaymentPage from "./pages/MakePaymentPage";

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/makePayment" component={MakePaymentPage} />
      </Switch>
    </Router>
  );

}

export default App;
