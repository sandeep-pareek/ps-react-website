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
import Github from './Github/Github';

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
              <Github />
            </Route>
          </Switch>
        </div>
      </Router>
      <br/>
    </div>
  );
}

export default App;
