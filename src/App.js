import React from 'react';
import './App.css';
import NavBar from "./components/Nav";
import HomePageComponent from "./page/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditorPageComponent from './page/EditorPage';


function App() {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePageComponent} />
          <Route path="/create" component={EditorPageComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
