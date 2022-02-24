import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Project from "./components/pages/project";
import impressum from "./components/pages/impressum";
import Semi from "./components/pages/semi";
import Model from "./components/pages/model";
import Begruenung from "./components/pages/begruenung";

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
                <Route path="/entstehung" component={Project}/>
                <Route path="/impressum" component={impressum}/>
                <Route path="/semi" exact component={Semi}/>
                <Route path="/model" exact component={Model}/>
                <Route path="/begruenung" exact component={Begruenung}/>
            </Switch>
        </Router>

    </>
  );
}

export default App;
