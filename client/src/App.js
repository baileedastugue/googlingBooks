import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar/index';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>
    <div>
      <AppNavbar/>
      <Container>
      <div>
        <h1>It's all going to be okay</h1>
      </div>
      </Container>
    </div>
    // </Router>
  )
}

export default App;