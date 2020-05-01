import React, { Component } from 'react'
import logo from '../images/logo-about.png'

export default class About extends Component {
    render() {
        return (
            <section className="about bg-light">
            <div className="container text-center">
              <div className="grid-2">
                <div className="center">
                  <img className="logo-about" src={logo} alt=""/>
                </div>
                <div className="justify-content-center align-self-center">
                  <h3 className="title"> </h3>
                  
                    <span>based in the vulnerability of the spirit, it defines what can not be defined, therefore it is defined by itself and its Permeability.</span>
        
                </div>
              </div>
            </div>
          </section>
        )
    }
}
