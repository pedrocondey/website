import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage';
import Header from './components/Header';
import Collections from './components/Collections';
import About from './components/About';
import Sub from './components/collections/Sub'

function App() {
  return (
    <Router>
    <Route path="/sub" exact component={Sub}/>
    <Route path="/" exact component={Header} />
    <Route path="/" exact component={Collections} />
    <Route path="/" exact component={About} />

    </Router>
  );
}

export default App;
