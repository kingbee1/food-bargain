
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Landingpage/Navbar';
import TopHeader from './components/Landingpage/TopHeader';
import Content from './components/Landingpage/Content';
import Hero from './components/Hero';
import Footer from './components/Landingpage/Footer';
import Groceries from './pages/Groceries';
import Pastries from './pages/Pastries';
import Restaurants from './pages/Restaurants';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Usersignup from './pages/UserSignUp';
import Cart from './pages/CartList';
import NotFound from './pages/NotFound';
import UserLogin from './pages/UserLogin';
import SampleCart from './pages/SampleCart';


function App() {
  return (
   
    <Router>
      <div className="App">
        <div className="Content">
 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/groceries">
              <Groceries />
            </Route>
            <Route path="/pastries">
              <Pastries />
            </Route>
            <Route path="/restaurants">
              <Restaurants />
            </Route>
            <Route path="/signup">
              <Usersignup />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <UserLogin />
            </Route>
            <Route path="/sample">
              <SampleCart />
            </Route>
            <Route>
              <NotFound path="/*" />
            </Route>
          </Switch>
        </div>
      </div>
   </Router>
  );
}

export default App;


