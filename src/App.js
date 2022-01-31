import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home  from "./Home/Home";
import About from "./About/About";
import { NavBar } from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/education">
              <About />
            </Route>
            <Route path="/work">
              <About />
            </Route>
            <Route path="/github">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <br/>
      <h3>Hi.. Welcome to <span className="c-red">pareek</span>sandeep.com!</h3>
      <h6> Work is in progress</h6>
    </div>
  );
}

export default App;
