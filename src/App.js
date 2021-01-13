import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/Navigation";
import PageRender from "./assets/misc/page-render";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="App">
        <div className="container">
          <Navigation />
          <Switch>
            <Route path="/:page" component={PageRender} />
            <Route path="/" render={() => <Redirect to="/gallery" />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
