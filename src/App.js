import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Project from "./components/pages/project";
import impressum from "./components/pages/impressum";
import gallery from "./components/pages/gallery";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Bienenhotel" exact component={Home} />
                <Route path="/Bienenhotel/" exact component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/project" component={Project}/>
                <Route path="/impressum" component={impressum}/>
                <Route path="/gallery" component={gallery}/>
            </Switch>
        </Router>

    </>
  );
}

export default App;
