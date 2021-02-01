import './App.css';
import React from "react";
import { Home, Details, Erro } from "../screens/";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details}/>
        <Route path="/*" component={Erro}/>
      </Switch>

    </Router>

  );
}

export default App;
