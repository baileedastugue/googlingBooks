import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar/index';
// import Search from './pages/Search';
import Saved from './pages/Saved';
// import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <AppNavbar/> */}
      {/* <Route exact path="/" component={Search} /> */}
      {/* <Route exact path="/search" component={Search} /> */}
      <Route exact path="/saved" component={Saved} />
      {/* <Route component={NoMatch} /> */}
    </Router>
  )
}

export default App;