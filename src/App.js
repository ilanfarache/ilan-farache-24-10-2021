 
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import "./styles/index.scss";


const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
