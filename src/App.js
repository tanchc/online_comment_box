import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Aboutpage from './components/pages/aboutPage';

// includes
import "./Assets/css/default.min.css"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/About' component={Aboutpage}/>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
