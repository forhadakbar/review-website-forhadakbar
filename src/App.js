import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div >

      {/* Router declaration */}

      <Router>

        <Header></Header>

        <Switch>

          {/* To be in Home page */}
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/signin">
            <SignIn></SignIn>
          </Route>


          {/* show 404 Not Found if user writes any path except above */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>



        </Switch>

        <Footer></Footer>


      </Router>



    </div>
  );
}

export default App;
