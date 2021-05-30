import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Project from "./components/pages/project";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/Bienenhotel" exact component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/project" component={Project}/>
            </Switch>
        </Router>

    </>
  );
}

export default App;
