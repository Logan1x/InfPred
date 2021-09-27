import Nav from "./components/navbar";
import Home from "./pages/homepage";
import Predict from "./pages/predict";
import About from "./pages/about";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-purple-50">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/predict">
            <Predict />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
