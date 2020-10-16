import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage';
import Header from './components/Header';
import Collections from './components/Collections';
import About from './components/About';
import Footer from './components/Footer';
import Sub from './components/collections/Sub'
import Shadow from './components/collections/Shadow'
import Informis from './components/collections/Informis'
import Muto from './components/collections/Muto'
import Voice from './components/collections/Voice'

function App() {
  return (
    
    <Router>
    <Route path="/sub" exact component={Sub}/>
    <Route path="/shadow" exact component={Shadow}/>
    <Route path="/informis" exact component={Informis}/>
    <Route path="/muto" exact component={Muto}/>
    <Route path="/voice" exact component={Voice}/>
    <Route path="/" exact component={Header} />
    <Route path="/" exact component={Collections} />
    <Route path="/" exact component={About} />


    </Router>
  );
}

export default App;
