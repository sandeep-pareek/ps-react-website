import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home  from "./Home/Home";
import About from "./About/About";
import { NavBar } from './Navbar/Navbar';
import Education from './Education/Education';
import Work from './Work/Work';

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
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/github">
              <About />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <br/>
      {/* <h3>Hi.. Welcome to <span className="c-red">pareek</span>sandeep.in!</h3>
      <h6> Work is in progress</h6> */}
    </div>
  );
}

export default App;
