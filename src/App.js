import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import QuickRegistration from './pages/QuickRegistration';
import Welcome from './pages/Welcome';
import Thanks from './pages/Thanks';
import Registration from './pages/Registration';
import AlreadyRegistered from './pages/AlreadyRegistered';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/welcome" exact component={Welcome}></Route>
        <Route path="/quickregistration" exact component={QuickRegistration}></Route>
        <Route path="/thanks" exact component={Thanks}></Route>
        <Route path="/registration" exact component={Registration}></Route>
        <Route path="/alreadyregistered" exact component={AlreadyRegistered}></Route>
    </Router>
    <Footer></Footer>
    </div>
  );
}

const Home = () => (
  <div className="App">
    <Welcome></Welcome>
    <Footer></Footer>
  </div>
  
)

export default App;
