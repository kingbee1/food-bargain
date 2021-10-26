
import './App.css';
import Home from './pages/Landingpage/Home';
import Navbar from './components/Landingpage/Navbar';
import Content from './pages/Landingpage/Content';
import Footer from './components/Landingpage/Footer';
import Groceries from './pages/Groceries';
import Bakery from './pages/Bakery';
import Restaurants from './pages/Restaurants';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router path="/groceries">
              <Groceries />
            </Router>
            <Router path="/bakery">
              <Bakery />
            </Router>
            <Router path="/restaurants">
              <Restaurants />
            </Router>
          </Switch>
        </div>
      </div>
   </Router>
  );
}

export default App;


