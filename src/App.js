import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Project from "./components/pages/project";
import impressum from "./components/pages/impressum";
import Semi from "./components/pages/semi";
import Begruenung from "./components/pages/begruenung";
import gallery from "./components/pages/gallery";
import Bewohner from "./components/pages/bewohner";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Bienenhotel" exact component={Home} />
                <Route path="/Bienenhotel/" exact component={Home} />
                <Route path="/entstehung" component={Project}/>
                <Route path="/impressum" component={impressum}/>
                <Route path="/semi" exact component={Semi}/>
                <Route path="/begruenung" exact component={Begruenung}/>
                <Route path="/gallery" exact component={gallery}/>
                <Route path="/bewohner" exact component={Bewohner}/>
            </Switch>
        </Router>

    </>
  );
}

export default App;
